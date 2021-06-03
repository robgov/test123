using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProviderApi.Models
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

        public virtual DbSet<VwAlbertaPsiprovider> VwAlbertaPsiproviders { get; set; }
        public virtual DbSet<VwLocation> VwLocations { get; set; }
        public virtual DbSet<VwLocationAddress> VwLocationAddresses { get; set; }
        public virtual DbSet<VwLocationEmail> VwLocationEmails { get; set; }
        public virtual DbSet<VwLocationPhone> VwLocationPhones { get; set; }
        public virtual DbSet<VwLocationPublication> VwLocationPublications { get; set; }
        public virtual DbSet<VwLocationWebsite> VwLocationWebsites { get; set; }
        public virtual DbSet<VwProgram> VwPrograms { get; set; }
        public virtual DbSet<VwProgramCost> VwProgramCosts { get; set; }
        public virtual DbSet<VwProgramPublication> VwProgramPublications { get; set; }
        public virtual DbSet<VwProvider> VwProviders { get; set; }
        public virtual DbSet<VwProviderAddress> VwProviderAddresses { get; set; }
        public virtual DbSet<VwProviderEmail> VwProviderEmails { get; set; }
        public virtual DbSet<VwProviderPhone> VwProviderPhones { get; set; }
        public virtual DbSet<VwProviderPublication> VwProviderPublications { get; set; }
        public virtual DbSet<VwProviderType> VwProviderTypes { get; set; }
        public virtual DbSet<VwProviderWebsite> VwProviderWebsites { get; set; }
        public virtual DbSet<VwSpecialization> VwSpecializations { get; set; }

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

            modelBuilder.Entity<VwProgram>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_Program");

                entity.Property(e => e.BusinessEndDate).HasColumnType("datetime");

                entity.Property(e => e.BusinessStartDate).HasColumnType("datetime");

                entity.Property(e => e.CredentialType).HasMaxLength(200);

                entity.Property(e => e.ProgramCode).HasMaxLength(50);

                entity.Property(e => e.ProgramGovernor).HasMaxLength(50);

                entity.Property(e => e.ProgramId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("ProgramID");

                entity.Property(e => e.ProgramLength).HasMaxLength(200);

                entity.Property(e => e.ProgramName).HasMaxLength(100);

                entity.Property(e => e.ProgramStatus).HasMaxLength(200);

                entity.Property(e => e.ProgramType).HasMaxLength(200);

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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
