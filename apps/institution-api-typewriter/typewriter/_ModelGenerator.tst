${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
    using System.Text.RegularExpressions;
    using System.Text;

    static string appPath = "../../planmp/src/";
    static string libsCommonPath = appPath + "libs/common/";

    // Uncomment the constructor to change template settings.
    Template(Settings settings)
    {
        settings.IncludeProject("institution-api");
        settings.OutputExtension = ".ts";
        settings.PartialRenderingMode = PartialRenderingMode.Partial;

        settings.OutputFilenameFactory = file =>
        {
            var modelClass = file.Classes.First();
            var fullFileName = file.FullName;
            var tsName = $"{ToTsFileName(modelClass.name)}.ts";

            //defaults to common, since most of the models belong to it (this may change in the future)
            return $"{libsCommonPath}models/{tsName}";
        };
    }

    static string[] ignoreModels = new string[] 
    { 
        "AEDMContext",
        "migration-log",
        "migration-log-current",
        "schema-snapshot"
    }; 

    string BaseClassExtends(Class c) => (c.BaseClass != null) ? string.Format(" extends {0}", c.BaseClass.Name) : null;

    string SuperConstructor(Typewriter.CodeModel.Class c) => (c.BaseClass == null) ? null : "super();";

    string ToTsFileName(string name)
    {
        var dashed = Regex.Replace(name, "([a-z])([A-Z])", "$1-$2");
        var className = dashed.ToLowerInvariant().Replace("-model", ".model");
        return className;
    }

    static string PropertyName(Property property)
    {
        if (property.Name.ToLower() == "this" || 
            property.Name.ToLower() == "this[]" || 
            property.Type.Name.ToLower().Contains("datatable") ||
            property.Type.Name.ToLower().Contains("httppostedfilebase")) 
        {
            return "";
        }
        else
        {
            string propertyDefault = "";
            string propertyTypeName = property.Type.Name;

            if (property.Type.IsNullable)
                propertyDefault = "";
            else if (property.Type.Name.ToLower() == "string")
                propertyDefault = " = ''";
            else if (property.Type.Name.ToLower() == "number") 
                propertyDefault = " = 0";
            else if (property.Type.Name.ToLower() == "boolean") 
                propertyDefault = " = false";
            else if (property.Type.Name.ToLower() == "date") 
            {
                propertyDefault = " = ''";
                propertyTypeName = "string";
            }
            else if (property.Type.Name.ToLower().Contains("[]")) 
                propertyDefault = " = []";
            else if (property.Type.Name.ToLower().Contains("[key: string]"))
                propertyDefault = " = {}";
            else if (property.Type.Name.ToLower() == "iformfile") 
            {
                propertyDefault = "";
                propertyTypeName = "Blob";
            }
            else 
                propertyDefault = " = new " + property.Type.Name + "()";

            return string.Format("public {0}: {1}{2};", property.name, propertyTypeName, propertyDefault);
        } 
    }

    string GetPackageName(string className, string fullClassName, string tsName)
    {
        if (ignoreModels.Contains(className)) 
        {
            return "@aed/libs/shared/models/" + tsName;
        }
            
        return "./" + tsName;
    }

    string Imports(Typewriter.CodeModel.Class c)
    {                   
        Dictionary<string, string> propertyDictionary = new Dictionary<string, string>();
        StringBuilder importBuilder = new StringBuilder();     
        
        // base class
        if (c.BaseClass != null) 
        {
            // importBuilder.Append(string.Format("import {{ {0} }} from './{1}';", c.BaseClass.Name, ToTsFileName(c.BaseClass.Name)));
            var packageName = GetPackageName(c.BaseClass.Name, c.BaseClass.FullName, ToTsFileName(c.BaseClass.Name));

            importBuilder.Append(string.Format("import {{ {0} }} from '{1}';", c.BaseClass.Name, packageName));
            importBuilder.AppendLine();
        }

        foreach (var property in c.Properties)
        {
            if (property.Type.Name == "IFormFile") continue;
            
            if (property.Type.IsEnum || (!property.Type.IsPrimitive && property.Type.Name != "any"))
            {            
                string typeName = property.Type.Name;
                if (typeName.Contains("[]"))
                {
                    typeName = typeName.Replace("[]", string.Empty);
                }

                if (!propertyDictionary.ContainsKey(typeName) && typeName != c.Name 
                    && typeName.ToLower() != "datatable" &&
                    typeName.ToLower() != "httppostedfilebase")
                {
                    propertyDictionary[typeName] = typeName;

                    var packageName = GetPackageName(typeName, property.Type.FullName, ToTsFileName(typeName));
                    importBuilder.Append(string.Format("import {{ {0} }} from '{1}';", typeName, packageName));

                    importBuilder.AppendLine();
                }
            }

            // dictionaries with non-primitive types
            if (property.Type.IsGeneric && property.Type.TypeArguments.Any()) 
            {
                foreach(var typeArg in property.Type.TypeArguments.Where(a => !a.IsPrimitive)) 
                {
                    string typeName = typeArg.ClassName();
                    
                    //may need this later
                    //var packageName = GetPackageName(typeArg.FullName, ToTsFileName(typeName));
                    //importBuilder.Append(string.Format("import {{ {0} }} from '{1}';", typeName, packageName));
                    
                    if (!propertyDictionary.ContainsKey(typeName) && !typeName.StartsWith("any")) 
                    {
                        propertyDictionary[typeName] = typeName;
                        importBuilder.Append(string.Format("import {{ {0} }} from './{1}';", typeName, ToTsFileName(typeName)));
                        importBuilder.AppendLine();
                    }
                }
            }
        }
        
        return importBuilder.ToString();
    }
}
$Classes(c => c.Namespace.Equals("ProviderApi.Models") && (!ignoreModels.Contains(c.Name) && c.Name.StartsWith("Vw")))[
$Imports
export class $Name$BaseClassExtends {$Properties[
    $PropertyName]

    constructor(init? : Partial<$Name>) {
        $SuperConstructor
        Object.assign(this, init);
    }
}]

