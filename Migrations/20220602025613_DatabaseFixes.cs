using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmaSystem.Migrations
{
    public partial class DatabaseFixes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BasketMedicine");

            migrationBuilder.AddColumn<Guid>(
                name: "MedicineID",
                table: "Basket",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Basket_MedicineID",
                table: "Basket",
                column: "MedicineID");

            migrationBuilder.AddForeignKey(
                name: "FK_Basket_Medicine_MedicineID",
                table: "Basket",
                column: "MedicineID",
                principalTable: "Medicine",
                principalColumn: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Basket_Medicine_MedicineID",
                table: "Basket");

            migrationBuilder.DropIndex(
                name: "IX_Basket_MedicineID",
                table: "Basket");

            migrationBuilder.DropColumn(
                name: "MedicineID",
                table: "Basket");

            migrationBuilder.CreateTable(
                name: "BasketMedicine",
                columns: table => new
                {
                    BasketID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MedicineID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BasketMedicine", x => new { x.BasketID, x.MedicineID });
                    table.ForeignKey(
                        name: "FK_BasketMedicine_Basket_BasketID",
                        column: x => x.BasketID,
                        principalTable: "Basket",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BasketMedicine_Medicine_MedicineID",
                        column: x => x.MedicineID,
                        principalTable: "Medicine",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BasketMedicine_MedicineID",
                table: "BasketMedicine",
                column: "MedicineID");
        }
    }
}
