using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProviderApi.Models
{
    public partial class AEDMContext : DbContext
    {
        public AEDMContext()
        {
        }

        public AEDMContext(DbContextOptions<AEDMContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Institution> Institutions { get; set; }
        public virtual DbSet<InstitutionAddress> InstitutionAddresses { get; set; }
        public virtual DbSet<InstitutionEmail> InstitutionEmails { get; set; }
        public virtual DbSet<InstitutionLocation> InstitutionLocations { get; set; }
        public virtual DbSet<InstitutionLocationAddress> InstitutionLocationAddresses { get; set; }
        public virtual DbSet<InstitutionLocationEmail> InstitutionLocationEmails { get; set; }
        public virtual DbSet<InstitutionLocationPhone> InstitutionLocationPhones { get; set; }
        public virtual DbSet<InstitutionLocationPublication> InstitutionLocationPublications { get; set; }
        public virtual DbSet<InstitutionLocationWebsite> InstitutionLocationWebsites { get; set; }
        public virtual DbSet<InstitutionPhone> InstitutionPhones { get; set; }
        public virtual DbSet<InstitutionPublication> InstitutionPublications { get; set; }
        public virtual DbSet<InstitutionWebsite> InstitutionWebsites { get; set; }
        public virtual DbSet<MigrationLog> MigrationLogs { get; set; }
        public virtual DbSet<MigrationLogCurrent> MigrationLogCurrents { get; set; }
        public virtual DbSet<Program> Programs { get; set; }
        public virtual DbSet<SchemaSnapshot> SchemaSnapshots { get; set; }
        public virtual DbSet<VwAllProgram> VwAllPrograms { get; set; }
        public virtual DbSet<VwCurrentInstitution> VwCurrentInstitutions { get; set; }
        public virtual DbSet<VwCurrentInstitutionAddress> VwCurrentInstitutionAddresses { get; set; }
        public virtual DbSet<VwCurrentInstitutionEmail> VwCurrentInstitutionEmails { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocation> VwCurrentInstitutionLocations { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocationAddress> VwCurrentInstitutionLocationAddresses { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocationEmail> VwCurrentInstitutionLocationEmails { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocationPhone> VwCurrentInstitutionLocationPhones { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocationPublication> VwCurrentInstitutionLocationPublications { get; set; }
        public virtual DbSet<VwCurrentInstitutionLocationWebsite> VwCurrentInstitutionLocationWebsites { get; set; }
        public virtual DbSet<VwCurrentInstitutionPhone> VwCurrentInstitutionPhones { get; set; }
        public virtual DbSet<VwCurrentInstitutionPublication> VwCurrentInstitutionPublications { get; set; }
        public virtual DbSet<VwCurrentInstitutionWebsite> VwCurrentInstitutionWebsites { get; set; }
        public virtual DbSet<VwInstitutionLocationSummary> VwInstitutionLocationSummaries { get; set; }
        public virtual DbSet<VwInstitutionProgram> VwInstitutionPrograms { get; set; }
        public virtual DbSet<VwInstitutionSummary> VwInstitutionSummaries { get; set; }
        public virtual DbSet<VwProviderType> VwProviderTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=D-642325;Database=AEDM;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Institution>(entity =>
            {
                entity.ToTable("Institution");

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.FederalInstitutionNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.InstituitionCategory).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionGuid).HasColumnName("InstitutionGUID");

                entity.Property(e => e.InstitutionLegalName).HasMaxLength(200);

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionShortName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.OperatingName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.PaprsinstitutionNumber).HasColumnName("PAPRSInstitutionNumber");
            });

            modelBuilder.Entity<InstitutionAddress>(entity =>
            {
                entity.ToTable("InstitutionAddress");

                entity.Property(e => e.InstitutionAddressId).HasColumnName("InstitutionAddressID");

                entity.Property(e => e.AddressBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.AddressBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.AddressGuid).HasColumnName("AddressGUID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionAddresses)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionAddress_Institution");
            });

            modelBuilder.Entity<InstitutionEmail>(entity =>
            {
                entity.ToTable("InstitutionEmail");

                entity.Property(e => e.InstitutionEmailId).HasColumnName("InstitutionEmailID");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.EmailBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailGuid).HasColumnName("EmailGUID");

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionEmails)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionEmail_Institution");
            });

            modelBuilder.Entity<InstitutionLocation>(entity =>
            {
                entity.ToTable("InstitutionLocation");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.LocationBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.LocationBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.ProviderBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionLocations)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionLocation_Institution");
            });

            modelBuilder.Entity<InstitutionLocationAddress>(entity =>
            {
                entity.ToTable("InstitutionLocationAddress");

                entity.Property(e => e.InstitutionLocationAddressId).HasColumnName("InstitutionLocationAddressID");

                entity.Property(e => e.AddressBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.AddressBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.AddressGuid).HasColumnName("AddressGUID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);

                entity.HasOne(d => d.InstitutionLocation)
                    .WithMany(p => p.InstitutionLocationAddresses)
                    .HasForeignKey(d => d.InstitutionLocationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_InstitutionLocationAddress_InstitutionLocation");
            });

            modelBuilder.Entity<InstitutionLocationEmail>(entity =>
            {
                entity.ToTable("InstitutionLocationEmail");

                entity.Property(e => e.InstitutionLocationEmailId).HasColumnName("InstitutionLocationEmailID");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.EmailBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.EmailGuid).HasColumnName("EmailGUID");

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.HasOne(d => d.InstitutionLocation)
                    .WithMany(p => p.InstitutionLocationEmails)
                    .HasForeignKey(d => d.InstitutionLocationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_InstitutionLocationEmail_InstitutionLocation");
            });

            modelBuilder.Entity<InstitutionLocationPhone>(entity =>
            {
                entity.ToTable("InstitutionLocationPhone");

                entity.Property(e => e.InstitutionLocationPhoneId).HasColumnName("InstitutionLocationPhoneID");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.PhoneBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneGuid).HasColumnName("PhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.HasOne(d => d.InstitutionLocation)
                    .WithMany(p => p.InstitutionLocationPhones)
                    .HasForeignKey(d => d.InstitutionLocationId)
                    .HasConstraintName("FK_InstitutionLocationPhone_InstitutionLocation");
            });

            modelBuilder.Entity<InstitutionLocationPublication>(entity =>
            {
                entity.ToTable("InstitutionLocationPublication");

                entity.Property(e => e.InstitutionLocationPublicationId).HasColumnName("InstitutionLocationPublicationID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.LocationPublicationGuid).HasColumnName("LocationPublicationGUID");

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.PublicationBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);

                entity.HasOne(d => d.InstitutionLocation)
                    .WithMany(p => p.InstitutionLocationPublications)
                    .HasForeignKey(d => d.InstitutionLocationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_InstitutionLocationPublication_InstitutionLocation");
            });

            modelBuilder.Entity<InstitutionLocationWebsite>(entity =>
            {
                entity.ToTable("InstitutionLocationWebsite");

                entity.Property(e => e.InstitutionLocationWebsiteId).HasColumnName("InstitutionLocationWebsiteID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.WebsiteBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.WebsiteBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.WebsiteGuid).HasColumnName("WebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);

                entity.HasOne(d => d.InstitutionLocation)
                    .WithMany(p => p.InstitutionLocationWebsites)
                    .HasForeignKey(d => d.InstitutionLocationId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_InstitutionLocationWebsite_InstitutionLocation");
            });

            modelBuilder.Entity<InstitutionPhone>(entity =>
            {
                entity.ToTable("InstitutionPhone");

                entity.Property(e => e.InstitutionPhoneId).HasColumnName("InstitutionPhoneID");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.PhoneBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.PhoneGuid).HasColumnName("PhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionPhones)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionPhone_Institution");
            });

            modelBuilder.Entity<InstitutionPublication>(entity =>
            {
                entity.ToTable("InstitutionPublication");

                entity.Property(e => e.InstitutionPublicationId).HasColumnName("InstitutionPublicationID");

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionPublicationBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.InstitutionPublicationBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.InstitutionPublicationGuid).HasColumnName("InstitutionPublicationGUID");

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderCategory).HasMaxLength(200);

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionPublications)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionPublication_Institution");
            });

            modelBuilder.Entity<InstitutionWebsite>(entity =>
            {
                entity.ToTable("InstitutionWebsite");

                entity.Property(e => e.InstitutionWebsiteId).HasColumnName("InstitutionWebsiteID");

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.WebsiteBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.WebsiteBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.WebsiteGuid).HasColumnName("WebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(2048)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);

                entity.HasOne(d => d.Institution)
                    .WithMany(p => p.InstitutionWebsites)
                    .HasForeignKey(d => d.InstitutionId)
                    .HasConstraintName("FK_InstitutionWebsite_Institution");
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

            modelBuilder.Entity<Program>(entity =>
            {
                entity.ToTable("Program");

                entity.HasIndex(e => e.ProgramGuid, "UX_Program_GUID")
                    .IsUnique();

                entity.Property(e => e.ProgramId).HasColumnName("ProgramID");

                entity.Property(e => e.CredentialType).HasMaxLength(200);

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramAdvertisedName).HasMaxLength(500);

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramEndDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramGuid).HasColumnName("ProgramGUID");

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramStartDate).HasColumnType("datetime");

                entity.Property(e => e.ProgramStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProviderGuid).HasColumnName("ProviderGUID");

                entity.Property(e => e.ProviderName).HasMaxLength(200);
            });

            modelBuilder.Entity<SchemaSnapshot>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("__SchemaSnapshot");

                entity.HasComment("This table is used by SQL Change Automation projects to store a snapshot of the schema at the time of the last deployment. Please do not alter or remove this table from the database.");
            });

            modelBuilder.Entity<VwAllProgram>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_AllProgram");

                entity.Property(e => e.CredentialType).HasMaxLength(200);

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramType).HasMaxLength(200);

                entity.Property(e => e.ProviderGovernor)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ProviderName).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitution>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitution");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.FederalInstitutionNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.InstitutionCategory).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionGuid).HasColumnName("InstitutionGUID");

                entity.Property(e => e.InstitutionId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLegalName).HasMaxLength(200);

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionShortName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.OperatingName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionAddress>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionAddress");

                entity.Property(e => e.AddressGuid).HasColumnName("AddressGUID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.InstitutionAddressId).HasColumnName("InstitutionAddressID");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<VwCurrentInstitutionEmail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionEmail");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailGuid).HasColumnName("EmailGUID");

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionEmailId).HasColumnName("InstitutionEmailID");

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocation>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocation");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.LocationGuid).HasColumnName("LocationGUID");

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocationAddress>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocationAddress");

                entity.Property(e => e.AddressGuid).HasColumnName("AddressGUID");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationAddressId).HasColumnName("InstitutionLocationAddressID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocationEmail>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocationEmail");

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailGuid).HasColumnName("EmailGUID");

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationEmailId).HasColumnName("InstitutionLocationEmailID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocationPhone>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocationPhone");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionLocationPhoneId).HasColumnName("InstitutionLocationPhoneID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.PhoneGuid).HasColumnName("PhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocationPublication>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocationPublication");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionLocationPublicationId).HasColumnName("InstitutionLocationPublicationID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationPublicationGuid).HasColumnName("LocationPublicationGUID");

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionLocationWebsite>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionLocationWebsite");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionLocationWebsiteId).HasColumnName("InstitutionLocationWebsiteID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.WebsiteGuid).HasColumnName("WebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionPhone>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionPhone");

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionPhoneId).HasColumnName("InstitutionPhoneID");

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.PhoneGuid).HasColumnName("PhoneGUID");

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwCurrentInstitutionPublication>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionPublication");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionPublicationBusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.InstitutionPublicationBusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.InstitutionPublicationGuid).HasColumnName("InstitutionPublicationGUID");

                entity.Property(e => e.InstitutionPublicationId).HasColumnName("InstitutionPublicationID");

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderCategory).HasMaxLength(200);

                entity.Property(e => e.ProviderOverviewHtml).HasColumnName("ProviderOverviewHTML");

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);
            });

            modelBuilder.Entity<VwCurrentInstitutionWebsite>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_CurrentInstitutionWebsite");

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.InstitutionWebsiteId).HasColumnName("InstitutionWebsiteID");

                entity.Property(e => e.WebsiteGuid).HasColumnName("WebsiteGUID");

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(2048)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwInstitutionLocationSummary>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_InstitutionLocationSummary");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.InstitutionCategory).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLocationId).HasColumnName("InstitutionLocationID");

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.LocationName).HasMaxLength(200);

                entity.Property(e => e.LocationPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.LocationStatus).HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.SubRegion).HasMaxLength(200);

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(200)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
            });

            modelBuilder.Entity<VwInstitutionProgram>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_InstitutionProgram");

                entity.Property(e => e.CredentialType).HasMaxLength(200);

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramType).HasMaxLength(200);

                entity.Property(e => e.ProviderName).HasMaxLength(200);
            });

            modelBuilder.Entity<VwInstitutionSummary>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_InstitutionSummary");

                entity.Property(e => e.AddressLine1).HasMaxLength(35);

                entity.Property(e => e.AddressLine2).HasMaxLength(35);

                entity.Property(e => e.AddressLine3).HasMaxLength(35);

                entity.Property(e => e.AddressLine4).HasMaxLength(35);

                entity.Property(e => e.AddressType).HasMaxLength(200);

                entity.Property(e => e.AddressUsage).HasMaxLength(200);

                entity.Property(e => e.City).HasMaxLength(60);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.CountryCallingCode).HasMaxLength(3);

                entity.Property(e => e.EmailAddress).HasMaxLength(200);

                entity.Property(e => e.EmailType).HasMaxLength(200);

                entity.Property(e => e.EmailUsage).HasMaxLength(200);

                entity.Property(e => e.Extension).HasMaxLength(7);

                entity.Property(e => e.FederalInstitutionNumber).HasMaxLength(4);

                entity.Property(e => e.HomeJurisdiction).HasMaxLength(200);

                entity.Property(e => e.InstitutionCategory).HasMaxLength(200);

                entity.Property(e => e.InstitutionCode)
                    .IsRequired()
                    .HasMaxLength(6);

                entity.Property(e => e.InstitutionId).HasColumnName("InstitutionID");

                entity.Property(e => e.InstitutionLegalName).HasMaxLength(200);

                entity.Property(e => e.InstitutionName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.InstitutionShortName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.InstitutionStatus).HasMaxLength(200);

                entity.Property(e => e.InstitutionType).HasMaxLength(200);

                entity.Property(e => e.OperatingName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.OperatingType).HasMaxLength(200);

                entity.Property(e => e.PhoneNumber).HasMaxLength(14);

                entity.Property(e => e.PhoneType).HasMaxLength(200);

                entity.Property(e => e.PhoneUsage).HasMaxLength(200);

                entity.Property(e => e.PostalZipCode).HasMaxLength(12);

                entity.Property(e => e.ProviderAdvertisedName).HasMaxLength(200);

                entity.Property(e => e.ProviderCategory).HasMaxLength(200);

                entity.Property(e => e.ProviderOverviewHtml).HasColumnName("ProviderOverviewHTML");

                entity.Property(e => e.ProviderPublicationStatus).HasMaxLength(200);

                entity.Property(e => e.ProvinceState).HasMaxLength(50);

                entity.Property(e => e.PublicationDetailStatus).HasMaxLength(200);

                entity.Property(e => e.StudentPopulation).HasMaxLength(20);

                entity.Property(e => e.WebsiteUrl)
                    .HasMaxLength(2048)
                    .HasColumnName("WebsiteURL");

                entity.Property(e => e.WebsiteUsage).HasMaxLength(200);
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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
