using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmaSystem.Migrations
{
    public partial class AddedAmountMedicine : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Amout",
                table: "Medicine",
                newName: "Amount");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "Medicine",
                newName: "Amout");
        }
    }
}
