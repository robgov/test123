using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProviderApi.Models.EntityFramework
{
    public partial class AEDigital_SYSTContext : DbContext
    {
        public AEDigital_SYSTContext()
        {
        }

        public AEDigital_SYSTContext(DbContextOptions<AEDigital_SYSTContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CipCode> CipCodes { get; set; }
        public virtual DbSet<CipCode1> CipCodes1 { get; set; }
        public virtual DbSet<DataSet> DataSets { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Location1> Locations1 { get; set; }
        public virtual DbSet<LocationAddress> LocationAddresses { get; set; }
        public virtual DbSet<LocationAddress1> LocationAddresses1 { get; set; }
        public virtual DbSet<LocationEmail> LocationEmails { get; set; }
        public virtual DbSet<LocationEmail1> LocationEmails1 { get; set; }
        public virtual DbSet<LocationPhone> LocationPhones { get; set; }
        public virtual DbSet<LocationPhone1> LocationPhones1 { get; set; }
        public virtual DbSet<LocationPublication> LocationPublications { get; set; }
        public virtual DbSet<LocationPublication1> LocationPublications1 { get; set; }
        public virtual DbSet<LocationWebSite1> LocationWebSites1 { get; set; }
        public virtual DbSet<LocationWebsite> LocationWebsites { get; set; }
        public virtual DbSet<MigrationLog> MigrationLogs { get; set; }
        public virtual DbSet<MigrationLogCurrent> MigrationLogCurrents { get; set; }
        public virtual DbSet<Paprscode> Paprscodes { get; set; }
        public virtual DbSet<PmpLookup> PmpLookups { get; set; }
        public virtual DbSet<Program> Programs { get; set; }
        public virtual DbSet<Program1> Programs1 { get; set; }
        public virtual DbSet<ProgramCost> ProgramCosts { get; set; }
        public virtual DbSet<ProgramCost1> ProgramCosts1 { get; set; }
        public virtual DbSet<ProgramCredential> ProgramCredentials { get; set; }
        public virtual DbSet<ProgramPublication> ProgramPublications { get; set; }
        public virtual DbSet<ProgramPublication1> ProgramPublications1 { get; set; }
        public virtual DbSet<ProgramType> ProgramTypes { get; set; }
        public virtual DbSet<Provider> Providers { get; set; }
        public virtual DbSet<Provider1> Providers1 { get; set; }
        public virtual DbSet<ProviderAddress> ProviderAddresses { get; set; }
        public virtual DbSet<ProviderAddress1> ProviderAddresses1 { get; set; }
        public virtual DbSet<ProviderEmail> ProviderEmails { get; set; }
        public virtual DbSet<ProviderEmail1> ProviderEmails1 { get; set; }
        public virtual DbSet<ProviderLogo> ProviderLogos { get; set; }
        public virtual DbSet<ProviderLogo1> ProviderLogos1 { get; set; }
        public virtual DbSet<ProviderPhone> ProviderPhones { get; set; }
        public virtual DbSet<ProviderPhone1> ProviderPhones1 { get; set; }
        public virtual DbSet<ProviderPublication> ProviderPublications { get; set; }
        public virtual DbSet<ProviderPublication1> ProviderPublications1 { get; set; }
        public virtual DbSet<ProviderType> ProviderTypes { get; set; }
        public virtual DbSet<ProviderWebSite1> ProviderWebSites1 { get; set; }
        public virtual DbSet<ProviderWebsite> ProviderWebsites { get; set; }
        public virtual DbSet<SchemaSnapshot> SchemaSnapshots { get; set; }
        public virtual DbSet<SessionOfStudy> SessionOfStudies { get; set; }
        public virtual DbSet<SessionOfStudy1> SessionOfStudies1 { get; set; }
        public virtual DbSet<SessionOfStudyCost> SessionOfStudyCosts { get; set; }
        public virtual DbSet<SessionOfStudyCost1> SessionOfStudyCosts1 { get; set; }
        public virtual DbSet<Specialization> Specializations { get; set; }
        public virtual DbSet<Specialization1> Specializations1 { get; set; }
        public virtual DbSet<VwAlbertaPsiprovider> VwAlbertaPsiproviders { get; set; }
        public virtual DbSet<VwLocation> VwLocations { get; set; }
        public virtual DbSet<VwLocationAddress> VwLocationAddresses { get; set; }
        public virtual DbSet<VwLocationEmail> VwLocationEmails { get; set; }
        public virtual DbSet<VwLocationPhone> VwLocationPhones { get; set; }
        public virtual DbSet<VwLocationPublication> VwLocationPublications { get; set; }
        public virtual DbSet<VwLocationWebsite> VwLocationWebsites { get; set; }
        public virtual DbSet<VwPmpLookup> VwPmpLookups { get; set; }
        public virtual DbSet<VwPmpPsipspecializationYearlyCost> VwPmpPsipspecializationYearlyCosts { get; set; }
        public virtual DbSet<VwPmpPsispecializationByCategoryList> VwPmpPsispecializationByCategoryLists { get; set; }
        public virtual DbSet<VwPmpPsispecializationCountByCategory> VwPmpPsispecializationCountByCategories { get; set; }
        public virtual DbSet<VwProgram> VwPrograms { get; set; }
        public virtual DbSet<VwProgramCost> VwProgramCosts { get; set; }
        public virtual DbSet<VwProgramCredential> VwProgramCredentials { get; set; }
        public virtual DbSet<VwProgramPublication> VwProgramPublications { get; set; }
        public virtual DbSet<VwProgramType> VwProgramTypes { get; set; }
        public virtual DbSet<VwProvider> VwProviders { get; set; }
        public virtual DbSet<VwProviderAddress> VwProviderAddresses { get; set; }
        public virtual DbSet<VwProviderEmail> VwProviderEmails { get; set; }
        public virtual DbSet<VwProviderLogo> VwProviderLogos { get; set; }
        public virtual DbSet<VwProviderPhone> VwProviderPhones { get; set; }
        public virtual DbSet<VwProviderPublication> VwProviderPublications { get; set; }
        public virtual DbSet<VwProviderType> VwProviderTypes { get; set; }
        public virtual DbSet<VwProviderWebsite> VwProviderWebsites { get; set; }
        public virtual DbSet<VwSessionOfStudy> VwSessionOfStudies { get; set; }
        public virtual DbSet<VwSpecialization> VwSpecializations { get; set; }
        public virtual DbSet<VwSpecializationCost> VwSpecializationCosts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=c-goa-sql-10348;Database=AEDigital_SYST;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<CipCode>(entity =>
            {
                entity.ToTable("CipCode");

                entity.HasIndex(e => e.CipCode1, "UX_CipCode_CipCode")
                    .IsUnique();

                entity.Property(e => e.CipCodeId).HasColumnName("CipCodeID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CipCode1)
                    .HasMaxLength(15)
                    .HasColumnName("CipCode");

                entity.Property(e => e.CipDescription).HasMaxLength(250);

                entity.Property(e => e.CipSeriesCode).HasMaxLength(2);

                entity.Property(e => e.CipSeriesDescription).HasMaxLength(250);

                entity.Property(e => e.CipSubSeries).HasMaxLength(250);

                entity.Property(e => e.CipSubSeriesCode).HasMaxLength(15);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("LastUPdateDate");
            });

            modelBuilder.Entity<CipCode1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("CipCode", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CipCode).HasMaxLength(15);

                entity.Property(e => e.CipDescription).HasMaxLength(250);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<DataSet>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("DataSet");

                entity.Property(e => e.DataSetDesciption).HasMaxLength(400);

                entity.Property(e => e.DataSetId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("DataSetID");

                entity.Property(e => e.DataSetName).HasMaxLength(50);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("Location");

                entity.HasIndex(e => e.LocationGuid, "UX_Location_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("LocationPSPStatus");

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<Location1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Location", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("LocationPSPStatus");

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");
            });

            modelBuilder.Entity<LocationAddress>(entity =>
            {
                entity.ToTable("LocationAddress");

                entity.HasIndex(e => e.LocationAddressGuid, "UX_LocationAddress_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationAddressId).HasColumnName("LocationAddressID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationAddressGuid).HasColumnName("LocationAddressGUID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<LocationAddress1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LocationAddress", "Staging");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationAddressGuid).HasColumnName("LocationAddressGUID");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<LocationEmail>(entity =>
            {
                entity.ToTable("LocationEmail");

                entity.HasIndex(e => e.LocationEmailGuid, "UX_LocationEmail_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationEmailId).HasColumnName("LocationEmailID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationEmailGuid).HasColumnName("LocationEmailGUID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");
            });

            modelBuilder.Entity<LocationEmail1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LocationEmail", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationEmailGuid).HasColumnName("LocationEmailGUID");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");
            });

            modelBuilder.Entity<LocationPhone>(entity =>
            {
                entity.ToTable("LocationPhone");

                entity.HasIndex(e => e.LocationPhoneGuid, "UX_LocationPhone_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationPhoneId).HasColumnName("LocationPhoneID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationPhoneGuid).HasColumnName("LocationPhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<LocationPhone1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LocationPhone", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationPhoneGuid).HasColumnName("LocationPhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<LocationPublication>(entity =>
            {
                entity.ToTable("LocationPublication");

                entity.HasIndex(e => e.LocationPublicationGuid, "UX_LocationPublication_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationPublicationId).HasColumnName("LocationPublicationID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationPublicationGuid).HasColumnName("LocationPublicationGUID");

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);
            });

            modelBuilder.Entity<LocationPublication1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LocationPublication", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationPublicationGuid).HasColumnName("LocationPublicationGUID");

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);
            });

            modelBuilder.Entity<LocationWebSite1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LocationWebSite", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationWebsiteGuid).HasColumnName("LocationWebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<LocationWebsite>(entity =>
            {
                entity.ToTable("LocationWebsite");

                entity.HasIndex(e => e.LocationWebsiteGuid, "UX_LocationWebsite_GUID")
                    .IsUnique();

                entity.Property(e => e.LocationWebsiteId).HasColumnName("LocationWebsiteID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationWebsiteGuid).HasColumnName("LocationWebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<MigrationLog>(entity =>
            {
                entity.HasKey(e => new { e.MigrationId, e.CompleteDt, e.ScriptChecksum });

                entity.ToTable("__MigrationLog");

                entity.HasComment("This table is required by SQL Change Automation projects to keep track of which migrations have been executed during deployment. Please do not alter or remove this table from the database.");

                entity.HasIndex(e => e.CompleteDt, "IX___MigrationLog_CompleteDt");

                entity.HasIndex(e => e.Version, "IX___MigrationLog_Version");

                entity.HasIndex(e => e.SequenceNo, "UX___MigrationLog_SequenceNo")
                    .IsUnique();

                entity.Property(e => e.MigrationId)
                    .HasColumnName("migration_id")
                    .HasComment("The unique identifier of a migration script file. This value is stored within the <Migration /> Xml fragment within the header of the file itself.\r\n\r\nNote that it is possible for this value to repeat in the [__MigrationLog] table. In the case of programmable object scripts, a record will be inserted with a particular ID each time a change is made to the source file and subsequently deployed.\r\n\r\nIn the case of a migration, you may see the same [migration_id] repeated, but only in the scenario where the \"Mark As Deployed\" button/command has been run.");

                entity.Property(e => e.CompleteDt)
                    .HasColumnName("complete_dt")
                    .HasComment("The date/time that the migration finished executing. This value is populated using the SYSDATETIME function.");

                entity.Property(e => e.ScriptChecksum)
                    .HasMaxLength(64)
                    .HasColumnName("script_checksum")
                    .HasComment("A SHA256 representation of the migration script file at the time of build.  This value is used to determine whether a migration has been changed since it was deployed. In the case of a programmable object script, a different checksum will cause the migration to be redeployed.\r\nNote: if any variables have been specified as part of a deployment, this will not affect the checksum value.");

                entity.Property(e => e.AppliedBy)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("applied_by")
                    .HasComment("The executing user at the time of deployment (populated using the SYSTEM_USER function).");

                entity.Property(e => e.Deployed)
                    .HasColumnName("deployed")
                    .HasDefaultValueSql("((1))")
                    .HasComment("This column contains a number of potential states:\r\n\r\n0 - Marked As Deployed: The migration was not executed.\r\n1- Deployed: The migration was executed successfully.\r\n2- Imported: The migration was generated by importing from this DB.\r\n\r\n\"Marked As Deployed\" and \"Imported\" are similar in that the migration was not executed on this database; it was was only marked as such to prevent it from executing during subsequent deployments.");

                entity.Property(e => e.PackageVersion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("package_version")
                    .HasComment("If you have enabled SQLCMD Packaging in your SQL Change Automation project, or if you are using Octopus Deploy, this will be the version number that your database package was stamped with at build-time.");

                entity.Property(e => e.ReleaseVersion)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("release_version")
                    .HasComment("If you are using Octopus Deploy, you can use the value in this column to look-up which release was responsible for deploying this migration.\r\nIf deploying via PowerShell, set the $ReleaseVersion variable to populate this column.\r\nIf deploying via Visual Studio, this column will always be NULL.");

                entity.Property(e => e.ScriptFilename)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("script_filename")
                    .HasComment("The name of the migration script file on disk, at the time of build.\r\nIf Semantic Versioning has been enabled, then this value will contain the full relative path from the root of the project folder. If it is not enabled, then it will simply contain the filename itself.");

                entity.Property(e => e.SequenceNo)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("sequence_no")
                    .HasComment("An auto-seeded numeric identifier that can be used to determine the order in which migrations were deployed.");

                entity.Property(e => e.Version)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("version")
                    .HasComment("The semantic version that this migration was created under. In SQL Change Automation projects, a folder can be given a version number, e.g. 1.0.0, and one or more migration scripts can be stored within that folder to provide logical grouping of related database changes.");
            });

            modelBuilder.Entity<MigrationLogCurrent>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("__MigrationLogCurrent");

                entity.HasComment("This view is required by SQL Change Automation projects to determine whether a migration should be executed during a deployment. The view lists the most recent [__MigrationLog] entry for a given [migration_id], which is needed to determine whether a particular programmable object script needs to be (re)executed: a non-matching checksum on the current [__MigrationLog] entry will trigger the execution of a programmable object script. Please do not alter or remove this table from the database.");

                entity.Property(e => e.AppliedBy)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasColumnName("applied_by");

                entity.Property(e => e.CompleteDt).HasColumnName("complete_dt");

                entity.Property(e => e.Deployed).HasColumnName("deployed");

                entity.Property(e => e.MigrationId).HasColumnName("migration_id");

                entity.Property(e => e.ScriptChecksum)
                    .IsRequired()
                    .HasMaxLength(64)
                    .HasColumnName("script_checksum");

                entity.Property(e => e.ScriptFilename)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasColumnName("script_filename");
            });

            modelBuilder.Entity<Paprscode>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("PAPRSCode", "Staging");

                entity.Property(e => e.CodeDisplay).HasMaxLength(200);

                entity.Property(e => e.CodeDisplayGuid).HasColumnName("CodeDisplayGUID");

                entity.Property(e => e.CodeType).HasMaxLength(200);

                entity.Property(e => e.CodeTypeGuid).HasColumnName("CodeTypeGUID");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.TypeGovernor).HasMaxLength(50);
            });

            modelBuilder.Entity<PmpLookup>(entity =>
            {
                entity.HasKey(e => new { e.Code, e.Type });

                entity.ToTable("pmpLookup");

                entity.Property(e => e.Code).HasMaxLength(50);

                entity.Property(e => e.Type).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<Program>(entity =>
            {
                entity.ToTable("Program");

                entity.HasIndex(e => e.ProgramGuid, "UX_Program_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramCredentialId).HasColumnName("ProgramCredentialID");

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramTypeId).HasColumnName("ProgramTypeID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<Program1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Program", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramCredentialGuid).HasColumnName("ProgramCredentialGUID");

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramTypeGuid).HasColumnName("ProgramTypeGUID");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");
            });

            modelBuilder.Entity<ProgramCost>(entity =>
            {
                entity.ToTable("ProgramCost");

                entity.HasIndex(e => e.ProgramCostGuid, "UX_ProgramCost_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramCostId).HasColumnName("ProgramCostID");

                entity.Property(e => e.Amount).HasColumnType("numeric(12, 2)");

                entity.Property(e => e.CostDescription).HasMaxLength(30);

                entity.Property(e => e.CostType).HasMaxLength(200);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCostGuid).HasColumnName("ProgramCostGUID");

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");
            });

            modelBuilder.Entity<ProgramCost1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProgramCost", "Staging");

                entity.Property(e => e.Amount).HasColumnType("numeric(12, 2)");

                entity.Property(e => e.CostDescription).HasMaxLength(30);

                entity.Property(e => e.CostType).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCostGuid).HasColumnName("ProgramCostGUID");

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");
            });

            modelBuilder.Entity<ProgramCredential>(entity =>
            {
                entity.ToTable("ProgramCredential");

                entity.HasIndex(e => e.ProgramCredentialGuid, "UX_ProgramCredential_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramCredentialId).HasColumnName("ProgramCredentialID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCredential1)
                    .HasMaxLength(200)
                    .HasColumnName("ProgramCredential");

                entity.Property(e => e.ProgramCredentialGuid).HasColumnName("ProgramCredentialGUID");
            });

            modelBuilder.Entity<ProgramPublication>(entity =>
            {
                entity.ToTable("ProgramPublication");

                entity.HasIndex(e => e.ProgramPublicationGuid, "UX_ProgramPublication_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramPublicationId).HasColumnName("ProgramPublicationID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramAdvertisedName).HasMaxLength(500);

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.ProgramPublicationGuid).HasColumnName("ProgramPublicationGUID");

                entity.Property(e => e.ProgramPublicationStatus).HasMaxLength(200);
            });

            modelBuilder.Entity<ProgramPublication1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProgramPublication", "Staging");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramAdvertisedName).HasMaxLength(500);

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");

                entity.Property(e => e.ProgramPublicationGuid).HasColumnName("ProgramPublicationGUID");

                entity.Property(e => e.ProgramPublicationStatus).HasMaxLength(200);
            });

            modelBuilder.Entity<ProgramType>(entity =>
            {
                entity.ToTable("ProgramType");

                entity.HasIndex(e => e.ProgramTypeGuid, "UX_ProgramType_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramTypeId).HasColumnName("ProgramTypeID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramType1)
                    .HasMaxLength(200)
                    .HasColumnName("ProgramType");

                entity.Property(e => e.ProgramTypeGuid).HasColumnName("ProgramTypeGUID");
            });

            modelBuilder.Entity<Provider>(entity =>
            {
                entity.ToTable("Provider");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.FederalProviderNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.OperatingName).HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderLegalName).HasMaxLength(200);

                entity.Property(e => e.ProviderName).HasMaxLength(200);

                entity.Property(e => e.ProviderPspcategory)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPCategory");

                entity.Property(e => e.ProviderPspcode)
                    .HasMaxLength(6)
                    .HasColumnName("ProviderPSPCode");

                entity.Property(e => e.ProviderPspshortName)
                    .HasMaxLength(50)
                    .HasColumnName("ProviderPSPShortName");

                entity.Property(e => e.ProviderPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPStatus");

                entity.Property(e => e.ProviderStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderTypeId).HasColumnName("ProviderTypeID");
            });

            modelBuilder.Entity<Provider1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Provider", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.FederalProviderNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.OperatingName).HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor).HasMaxLength(50);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderLegalName).HasMaxLength(200);

                entity.Property(e => e.ProviderName).HasMaxLength(200);

                entity.Property(e => e.ProviderPspcategory)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPCategory");

                entity.Property(e => e.ProviderPspcode)
                    .HasMaxLength(6)
                    .HasColumnName("ProviderPSPCode");

                entity.Property(e => e.ProviderPspshortName)
                    .HasMaxLength(50)
                    .HasColumnName("ProviderPSPShortName");

                entity.Property(e => e.ProviderPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPStatus");

                entity.Property(e => e.ProviderStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderType).HasMaxLength(200);

                entity.Property(e => e.ProviderTypeGuid).HasColumnName("ProviderTypeGUID");
            });

            modelBuilder.Entity<ProviderAddress>(entity =>
            {
                entity.ToTable("ProviderAddress");

                entity.HasIndex(e => e.ProviderAddressGuid, "UX_ProviderAddress_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderAddressId).HasColumnName("ProviderAddressID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProviderAddressGuid).HasColumnName("ProviderAddressGUID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<ProviderAddress1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderAddress", "Staging");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProviderAddressGuid).HasColumnName("ProviderAddressGUID");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<ProviderEmail>(entity =>
            {
                entity.ToTable("ProviderEmail");

                entity.HasIndex(e => e.ProviderEmailGuid, "UX_ProviderEmail_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderEmailId).HasColumnName("ProviderEmailID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderEmailGuid).HasColumnName("ProviderEmailGUID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<ProviderEmail1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderEmail", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderEmailGuid).HasColumnName("ProviderEmailGUID");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");
            });

            modelBuilder.Entity<ProviderLogo>(entity =>
            {
                entity.ToTable("ProviderLogo");

                entity.HasIndex(e => e.ProviderGuid, "UX_ProviderLogo_GUID");

                entity.Property(e => e.ProviderLogoId).HasColumnName("ProviderLogoID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.LogoUrl)
                    .HasMaxLength(800)
                    .HasColumnName("LogoURL");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<ProviderLogo1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderLogo", "Staging");

                entity.Property(e => e.DisplayApplyAlbertaButton).HasColumnName("Display Apply Alberta Button");

                entity.Property(e => e.DisplayProgramChart).HasColumnName("Display Program Chart");

                entity.Property(e => e.GoogleMapOverwrite).HasColumnName("Google Map overwrite");

                entity.Property(e => e.Guid).HasMaxLength(255);

                entity.Property(e => e.HasFeatureChartData).HasColumnName("Has Feature Chart Data");

                entity.Property(e => e.LogoImage)
                    .HasMaxLength(255)
                    .HasColumnName("Logo image");

                entity.Property(e => e.Name).HasMaxLength(255);

                entity.Property(e => e.SchoolFeatures)
                    .HasMaxLength(255)
                    .HasColumnName("School Features");
            });

            modelBuilder.Entity<ProviderPhone>(entity =>
            {
                entity.ToTable("ProviderPhone");

                entity.HasIndex(e => e.ProviderPhoneGuid, "UX_ProviderPhone_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderPhoneId).HasColumnName("ProviderPhoneID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderPhoneGuid).HasColumnName("ProviderPhoneGUID");
            });

            modelBuilder.Entity<ProviderPhone1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderPhone", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderPhoneGuid).HasColumnName("ProviderPhoneGUID");
            });

            modelBuilder.Entity<ProviderPublication>(entity =>
            {
                entity.ToTable("ProviderPublication");

                entity.HasIndex(e => e.ProviderPublicationGuid, "UX_ProviderPublication_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderPublicationId).HasColumnName("ProviderPublicationID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderPublicationGuid).HasColumnName("ProviderPublicationGUID");

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);
            });

            modelBuilder.Entity<ProviderPublication1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderPublication", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderPublicationGuid).HasColumnName("ProviderPublicationGUID");

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);
            });

            modelBuilder.Entity<ProviderType>(entity =>
            {
                entity.ToTable("ProviderType");

                entity.HasIndex(e => e.ProviderTypeGuid, "UX_ProviderType_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderTypeId).HasColumnName("ProviderTypeID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderType1)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderType");

                entity.Property(e => e.ProviderTypeGuid).HasColumnName("ProviderTypeGUID");
            });

            modelBuilder.Entity<ProviderWebSite1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ProviderWebSite", "Staging");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderWebsiteGuid).HasColumnName("ProviderWebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<ProviderWebsite>(entity =>
            {
                entity.ToTable("ProviderWebsite");

                entity.HasIndex(e => e.ProviderWebsiteGuid, "UX_ProviderWebsite_GUID")
                    .IsUnique();

                entity.Property(e => e.ProviderWebsiteId).HasColumnName("ProviderWebsiteID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderWebsiteGuid).HasColumnName("ProviderWebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<SchemaSnapshot>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("__SchemaSnapshot");

                entity.HasComment("This table is used by SQL Change Automation projects to store a snapshot of the schema at the time of the last deployment. Please do not alter or remove this table from the database.");

                entity.Property(e => e.LastUpdateDate).HasDefaultValueSql("(sysdatetime())");
            });

            modelBuilder.Entity<SessionOfStudy>(entity =>
            {
                entity.ToTable("SessionOfStudy");

                entity.HasIndex(e => e.SessionOfStudyGuid, "UX_SessionOfStudy_GUID")
                    .IsUnique();

                entity.Property(e => e.SessionOfStudyId).HasColumnName("SessionOfStudyID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.DisplayOnSfsflag).HasColumnName("DisplayOnSFSFlag");

                entity.Property(e => e.FundingYear).HasMaxLength(10);

                entity.Property(e => e.FundingYearCode).HasMaxLength(4);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyGuid).HasColumnName("SessionOfStudyGUID");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.StudyYear).HasColumnType("numeric(2, 0)");
            });

            modelBuilder.Entity<SessionOfStudy1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("SessionOfStudy", "Staging");

                entity.Property(e => e.DisplayOnSfsflag).HasColumnName("DisplayOnSFSFlag");

                entity.Property(e => e.FundingYear).HasMaxLength(10);

                entity.Property(e => e.FundingYearCode).HasMaxLength(4);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyGuid).HasColumnName("SessionOfStudyGUID");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationGuid).HasColumnName("SpecializationGUID");

                entity.Property(e => e.StudyYear).HasColumnType("numeric(2, 0)");
            });

            modelBuilder.Entity<SessionOfStudyCost>(entity =>
            {
                entity.ToTable("SessionOfStudyCost");

                entity.HasIndex(e => e.SessionOfStudyCostGuid, "UX_SessionOfStudyCost_GUID")
                    .IsUnique();

                entity.Property(e => e.SessionOfStudyCostId).HasColumnName("SessionOfStudyCostID");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.CostType).HasMaxLength(200);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyCostGuid).HasColumnName("SessionOfStudyCostGUID");

                entity.Property(e => e.SessionOfStudyId).HasColumnName("SessionOfStudyID");
            });

            modelBuilder.Entity<SessionOfStudyCost1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("SessionOfStudyCost", "Staging");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.CostType).HasMaxLength(200);

                entity.Property(e => e.CostTypeGuid).HasColumnName("CostTypeGUID");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyCostGuid).HasColumnName("SessionOfStudyCostGUID");

                entity.Property(e => e.SessionOfStudyGuid).HasColumnName("SessionOfStudyGUID");
            });

            modelBuilder.Entity<Specialization>(entity =>
            {
                entity.ToTable("Specialization");

                entity.HasIndex(e => e.SpecializationGuid, "UX_Speialization_GUID")
                    .IsUnique();

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.AdministrativeUnit).HasMaxLength(100);

                entity.Property(e => e.AdministrativeUnitCode).HasMaxLength(2);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CipCodeId).HasColumnName("CipCodeID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.EntranceRequirement).HasMaxLength(200);

                entity.Property(e => e.EntranceRequirementCode).HasMaxLength(4);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PrimaryFundingCode).HasMaxLength(200);

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.SpecializationCode).HasMaxLength(30);

                entity.Property(e => e.SpecializationGuid).HasColumnName("SpecializationGUID");

                entity.Property(e => e.SpecializationName).HasMaxLength(160);

                entity.Property(e => e.SpecializationStatus).HasMaxLength(200);

                entity.Property(e => e.UnitOfLoad).HasMaxLength(200);
            });

            modelBuilder.Entity<Specialization1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Specialization", "Staging");

                entity.Property(e => e.AdministrativeUnit).HasMaxLength(100);

                entity.Property(e => e.AdministrativeUnitCode).HasMaxLength(2);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CipCode).HasMaxLength(15);

                entity.Property(e => e.EntranceRequirement).HasMaxLength(200);

                entity.Property(e => e.EntranceRequirementCode).HasMaxLength(4);

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.PrimaryFundingCode).HasMaxLength(200);

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");

                entity.Property(e => e.SpecializationCode).HasMaxLength(30);

                entity.Property(e => e.SpecializationGuid).HasColumnName("SpecializationGUID");

                entity.Property(e => e.SpecializationName).HasMaxLength(160);

                entity.Property(e => e.SpecializationStatus).HasMaxLength(200);

                entity.Property(e => e.UnitOfLoad).HasMaxLength(200);
            });

            modelBuilder.Entity<VwAlbertaPsiprovider>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_AlbertaPSIProvider");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.FederalProviderNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.OperatingName).HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderLegalName).HasMaxLength(200);

                entity.Property(e => e.ProviderName).HasMaxLength(200);

                entity.Property(e => e.ProviderPspcategory)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPCategory");

                entity.Property(e => e.ProviderPspcode)
                    .HasMaxLength(6)
                    .HasColumnName("ProviderPSPCode");

                entity.Property(e => e.ProviderPspshortName)
                    .HasMaxLength(50)
                    .HasColumnName("ProviderPSPShortName");

                entity.Property(e => e.ProviderPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPStatus");

                entity.Property(e => e.ProviderStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderType).HasMaxLength(200);

                entity.Property(e => e.ProviderTypeId).HasColumnName("ProviderTypeID");
            });

            modelBuilder.Entity<VwLocation>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Location");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationID");

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("LocationPSPStatus");

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<VwLocationAddress>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_LocationAddress");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.LocationAddressId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationAddressID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<VwLocationEmail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_LocationEmail");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.LocationEmailId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationEmailID");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");
            });

            modelBuilder.Entity<VwLocationPhone>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_LocationPhone");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationPhoneId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationPhoneID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwLocationPublication>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_LocationPublication");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationPublicationId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationPublicationID");

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);
            });

            modelBuilder.Entity<VwLocationWebsite>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_LocationWebsite");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationWebsiteId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("LocationWebsiteID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwPmpLookup>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_pmp_Lookup");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<VwPmpPsipspecializationYearlyCost>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_pmp_PSIPSpecializationYearlyCost");

                entity.Property(e => e.Cost).HasColumnType("money");

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyId).HasColumnName("SessionOfStudyID");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");
            });

            modelBuilder.Entity<VwPmpPsispecializationByCategoryList>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_pmp_PSISpecializationByCategoryList");

                entity.Property(e => e.CipSubSeries).HasMaxLength(250);

                entity.Property(e => e.CipSubSeriesCode).HasMaxLength(15);

                entity.Property(e => e.LogoUrl)
                    .HasMaxLength(800)
                    .HasColumnName("LogoURL");

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProviderName).HasMaxLength(200);

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationCode).HasMaxLength(30);

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.SpecializationName).HasMaxLength(160);
            });

            modelBuilder.Entity<VwPmpPsispecializationCountByCategory>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_pmp_PSISpecializationCountByCategory");

                entity.Property(e => e.CipSubSeries).HasMaxLength(250);

                entity.Property(e => e.CipSubSeriesCode).HasMaxLength(15);
            });

            modelBuilder.Entity<VwProgram>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Program");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramCredentialId).HasColumnName("ProgramCredentialID");

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProgramID");

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramTypeId).HasColumnName("ProgramTypeID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<VwProgramCost>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProgramCost");

                entity.Property(e => e.Books).HasColumnType("numeric(38, 2)");

                entity.Property(e => e.Other).HasColumnType("numeric(38, 2)");

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.Tuition).HasColumnType("numeric(38, 2)");
            });

            modelBuilder.Entity<VwProgramCredential>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProgramCredential");

                entity.Property(e => e.ProgramCredential).HasMaxLength(200);

                entity.Property(e => e.ProgramCredentialId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProgramCredentialID");
            });

            modelBuilder.Entity<VwProgramPublication>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProgramPublication");

                entity.Property(e => e.ProgramAdvertisedName).HasMaxLength(500);

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.ProgramPublicationId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProgramPublicationID");

                entity.Property(e => e.ProgramPublicationStatus).HasMaxLength(200);
            });

            modelBuilder.Entity<VwProgramType>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProgramType");

                entity.Property(e => e.ProgramType).HasMaxLength(200);

                entity.Property(e => e.ProgramTypeId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProgramTypeID");
            });

            modelBuilder.Entity<VwProvider>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Provider");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.FederalProviderNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.OperatingName).HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderLegalName).HasMaxLength(200);

                entity.Property(e => e.ProviderName).HasMaxLength(200);

                entity.Property(e => e.ProviderPspcategory)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPCategory");

                entity.Property(e => e.ProviderPspcode)
                    .HasMaxLength(6)
                    .HasColumnName("ProviderPSPCode");

                entity.Property(e => e.ProviderPspshortName)
                    .HasMaxLength(50)
                    .HasColumnName("ProviderPSPShortName");

                entity.Property(e => e.ProviderPspstatus)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderPSPStatus");

                entity.Property(e => e.ProviderStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderType).HasMaxLength(200);

                entity.Property(e => e.ProviderTypeId).HasColumnName("ProviderTypeID");
            });

            modelBuilder.Entity<VwProviderAddress>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderAddress");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProviderAddressId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderAddressID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<VwProviderEmail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderEmail");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.ProviderEmailId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderEmailID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<VwProviderLogo>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderLogo");

                entity.Property(e => e.LogoUrl)
                    .HasMaxLength(800)
                    .HasColumnName("LogoURL");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");
            });

            modelBuilder.Entity<VwProviderPhone>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderPhone");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderPhoneId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderPhoneID");
            });

            modelBuilder.Entity<VwProviderPublication>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderPublication");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderPublicationId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderPublicationID");

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);
            });

            modelBuilder.Entity<VwProviderType>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderType");

                entity.Property(e => e.ProviderType).HasMaxLength(200);

                entity.Property(e => e.ProviderTypeId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderTypeID");
            });

            modelBuilder.Entity<VwProviderWebsite>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_ProviderWebsite");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.ProviderWebsiteId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProviderWebsiteID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwSessionOfStudy>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_SessionOfStudy");

                entity.Property(e => e.DisplayOnSfsflag).HasColumnName("DisplayOnSFSFlag");

                entity.Property(e => e.FundingYear).HasMaxLength(10);

                entity.Property(e => e.FundingYearCode).HasMaxLength(4);

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyGuid).HasColumnName("SessionOfStudyGUID");

                entity.Property(e => e.SessionOfStudyId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("SessionOfStudyID");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.StudyYear).HasColumnType("numeric(2, 0)");
            });

            modelBuilder.Entity<VwSpecialization>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Specialization");

                entity.Property(e => e.AdministrativeUnit).HasMaxLength(100);

                entity.Property(e => e.AdministrativeUnitCode).HasMaxLength(2);

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CipCodeId).HasColumnName("CipCodeID");

                entity.Property(e => e.CipSubSeries).HasMaxLength(250);

                entity.Property(e => e.CipSubSeriesCode).HasMaxLength(15);

                entity.Property(e => e.EntranceRequirement).HasMaxLength(200);

                entity.Property(e => e.EntranceRequirementCode).HasMaxLength(4);

                entity.Property(e => e.PrimaryFundingCode).HasMaxLength(200);

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.SpecializationCode).HasMaxLength(30);

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.SpecializationName).HasMaxLength(160);

                entity.Property(e => e.SpecializationStatus).HasMaxLength(200);

                entity.Property(e => e.UnitOfLoad).HasMaxLength(200);
            });

            modelBuilder.Entity<VwSpecializationCost>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_SpecializationCost");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.CostType).HasMaxLength(200);

                entity.Property(e => e.DisplayOnSfsflag).HasColumnName("DisplayOnSFSFlag");

                entity.Property(e => e.FundingYearCode).HasMaxLength(4);

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.ProviderId).HasColumnName("ProviderID");

                entity.Property(e => e.SessionEndDate).HasColumnType("datetime");

                entity.Property(e => e.SessionOfStudyId).HasColumnName("SessionOfStudyID");

                entity.Property(e => e.SessionStartDate).HasColumnType("datetime");

                entity.Property(e => e.SpecializationId).HasColumnName("SpecializationID");

                entity.Property(e => e.StudyYear).HasColumnType("numeric(2, 0)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
