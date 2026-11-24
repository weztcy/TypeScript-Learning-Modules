/**
 * Submodul: 279_nestjs_controller.ts
 * Topik: Controller pada Framework NestJS
 * Tujuan: Memahami arsitektur Controller berbasis dekorator (@Controller, @Get, @Post) pada NestJS.
 */

console.log("=== Controller NestJS di TypeScript ===");

// Simulasi decorator NestJS
function Controller(prefix: string) {
    return function (target: Function) {
        console.log(`[NESTJS DECORATOR] Mendaftarkan Controller dengan prefix rute: '/${prefix}'`);
    };
}

function Get(path: string = "") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`[NESTJS ROUTE] Mendaftarkan rute GET: '${path}' pada method '${propertyKey}'`);
    };
}

@Controller("produk")
class ProdukNestController {
    @Get("")
    ambilSemuaProduk() {
        return ["Laptop", "Mouse", "Keyboard"];
    }

    @Get(":id")
    ambilSatuProduk() {
        return { id: 1, nama: "Laptop High-End" };
    }
}

const nestCtrl = new ProdukNestController();
console.log("Daftar Produk:", nestCtrl.ambilSemuaProduk());
