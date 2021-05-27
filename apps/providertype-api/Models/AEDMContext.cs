using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProviderTypeApi.Models
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


        public virtual DbSet<ProviderType> ProviderTypes { get; set; }

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

 
            modelBuilder.Entity<ProviderType>(entity =>
            {
                entity.ToTable("ProviderType");

                entity.Property(e => e.ProviderTypeId).HasColumnName("ProviderTypeID");

                entity.Property(e => e.DeleteDate).HasColumnType("datetime");

                entity.Property(e => e.LastUpdateDate).HasColumnType("datetime");

                entity.Property(e => e.ProviderType1)
                    .HasMaxLength(200)
                    .HasColumnName("ProviderType");

                entity.Property(e => e.ProviderTypeGuid).HasColumnName("ProviderTypeGUID");
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
