using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DropTablesSocial.Data.Migrations
{
    /// <inheritdoc />
    public partial class ReconnectHosted : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "ProfileImageUrl", "Username" },
                values: new object[,]
                {
                    { 1, "spongebob@example.com", "https://cloudfront-us-east-1.images.arcpublishing.com/opb/UODRDCE3KTLWUWUHHRETSAXL7U.jpg", "SpongeBob" },
                    { 2, "patrick@example.com", "https://easydrawingguides.com/wp-content/uploads/2021/09/how-to-draw-patrick-star-from-spongebob-squarepants-featured-image-1200.png", "Patrick" },
                    { 3, "squidward@example.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVKlScrVht-sfwBsSrP_4CzTabcB8Y-sipA&s", "Squidward" },
                    { 4, "", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/405610ed-0ed8-404b-b733-b0bc5ad9d340/dcwvhem-bf8b69ae-ee59-4bb0-9aa1-e00e7ab64c4b.png/v1/fill/w_331,h_324/mr__krabs_png_by_thelivingbluejay_dcwvhem-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzI0IiwicGF0aCI6IlwvZlwvNDA1NjEwZWQtMGVkOC00MDRiLWI3MzMtYjBiYzVhZDlkMzQwXC9kY3d2aGVtLWJmOGI2OWFlLWVlNTktNGJiMC05YWExLWUwMGU3YWI2NGM0Yi5wbmciLCJ3aWR0aCI6Ijw9MzMxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.z27jGqYPCzv2pCCILdxcSC2GVVQ09ggzR7gC_ohlV7s", "MrKrabs" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 4);
        }
    }
}
