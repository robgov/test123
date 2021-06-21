using System;
using System.Collections.Generic;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class DataSet
    {
        public int DataSetId { get; set; }
        public string DataSetName { get; set; }
        public string DataSetDesciption { get; set; }
    }
}
