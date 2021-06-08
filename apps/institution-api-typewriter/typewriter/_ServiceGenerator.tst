${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    using Typewriter.Extensions.WebApi;
    using System.Text.RegularExpressions;
    using System.Text;

    static string appPath = "../../../";
    static string libsCommonPath = appPath + "libs/common/";

     // Uncomment the constructor to change template settings.
    Template(Settings settings)
    {
        settings.IncludeAllProjects();
        settings.OutputExtension = ".ts";
        settings.PartialRenderingMode = PartialRenderingMode.Partial;

        settings.OutputFilenameFactory = file =>
        {
            var modelClass = file.Classes.First();
            var tsName = ToTsFileName(modelClass.name) + ".service.ts";
            var fullName = file.FullName;

            // default to common, since it has the majority of services (this may have to change in the future)
            return $"{libsCommonPath}services/{tsName}";
        };
    }

    static string[] ignoreControllers = new [] { "Default", "Document", "Seed", "ResourceController" };
    static string[] ignoreMethods = new string[] {}; 

    string ToTsFileName(string name)
    {
        var dashed = Regex.Replace(name.Replace("Controller",""), "([a-z])([A-Z])", "$1-$2");
        var className = dashed.ToLowerInvariant().Replace("-model", ".model");
        return className;
    }

    string ReturnType(Method m) => m.Type.Name == "FileResult" ? "Blob" : m.Type.Name;
    string ServiceName(Class c) => c.Name.Replace("Controller", "Service");
    // string ServiceType(Class c) => c.Name.Replace("Controller", string.Empty).ToLowerInvariant();
    // string Now(Class c) => DateTime.UtcNow.ToString("yyyy-MM-dd hh:mm:ss");
    string GetMethod(Method m)
    {
        if (m.Name.StartsWith("Download"))
            return "download";
        else if (m.HttpMethod() == "delete")
            return "deleteCore";
        else
            return m.HttpMethod();
    }

    bool MethodHasParameters(Method m) => m.Parameters.Count() != 0;
    bool MethodHasQuery(Method m) => m.Parameters[0].Name.EndsWith("Query");
    bool MethodHasFormFile(Method m) 
    {
        if (!MethodHasParameters(m)) return false;

        var param = m.Parameters.First();
        return param.Type.Properties.Any(p => p.Type.Name == "IFormFile");
    }
    string FormDataRequired(Method m) => MethodHasFormFile(m) 
        ? "\r\n        const formData = this.buildFormDataFromModel(model);"
        : "";

    string ModelRequired(Method m) => MethodHasFormFile(m) ? ", formData" : MethodHasParameters(m) ? ", " +  m.Parameters[0].Name : "";

    string CamelCase(string input) => input[0].ToString().ToLowerInvariant() + input.Replace("Service", "").Substring(1);

    string GetRouteName(Method m)
    {
        // after "api/"
        var secondSlash = m.Route().IndexOf('/', 5);
        if (secondSlash == -1)
        {
            // no second slash, so route is only two parts, e.g. /api/document
            return "";
        }
        var childRoute = m.Route().Substring(secondSlash + 1);
        return childRoute;
    }

    bool IsCommonImport(string fullName)
    {
        return true;
    }

    static string[] prim = new [] {"bool", "boolean", "string", "number", "RedirectResult", "FileResult"};
    string Imports(Class c)
    {
        var buffer =  new List<string>();
        var importTemplate = "import {{ {0} }} from '{1}';\r\n";
        
        // managing these lists leads to lots of repetitive code
        var commonImports = new List<string>();

        foreach (var method in c.Methods) 
        {
            var className = method.Type.ClassName().Trim();
            var import = string.Empty;

            if (prim.Contains(className))
            {
                //Do nothing for base types.
            }
            else if (IsCommonImport(method.Type.FullName))
            {
                commonImports.Add(className);
            }
            
            foreach (var property in method.Parameters)
            {
                if (prim.Contains(property.Type)) continue;

                if (IsCommonImport(property.Type.FullName))
                {
                    commonImports.Add(property.Type);
                }
            }
        }
        commonImports = commonImports.Distinct().OrderBy(x => x).ToList();

        if (commonImports.Count > 0)
        {
            buffer.Add(string.Format(importTemplate, string.Join(", ", commonImports), "@libs/common/models"));
        }

        return string.Join(string.Empty, buffer.Distinct());
    }
}
$Classes(c => c.Namespace.Equals("ProviderApi.Controllers") && (c.Name.EndsWith("Controller") && !ignoreControllers.Any(q => c.Name.StartsWith(q))))[
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPointService } from './end-point.service';
import { Observable } from 'rxjs';

$Imports
@Injectable({
    providedIn: 'root'
})
export class $ServiceName extends EndPointService {
	key: string;

    constructor(http: HttpClient){
        super(http);
        this.key = '$ServiceName[$CamelCase]';
    }
    $Methods(c => !ignoreMethods.Any(q => c.Name.StartsWith(q)))[
    public $name($Parameters[$name: $Type][, ]): Observable<$ReturnType> { $FormDataRequired
        return this.$GetMethod(this.url + '$GetRouteName'$ModelRequired);
    }]

    private get url() {
        return this.urlBase + this.key + "/";
    }
}]
