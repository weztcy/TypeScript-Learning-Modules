/**
 * Submodul: 280_nestjs_service.ts
 * Topik: Service pada Framework NestJS
 * Tujuan: Mengisolasi logika bisnis ke dalam class penyedia (@Injectable Service).
 */

console.log("=== Service NestJS di TypeScript ===");

function Injectable() {
    return function (target: Function) {
        console.log(`[NESTJS INJECTABLE] Kelas '${target.name}' siap dikelola oleh Dependency Injection container.`);
    };
}

@Injectable()
class LayananKatalogProduk {
    private inventaris = ["Server Rack 42U", "Router Mikrotik", "Switch Cisco 24-Port"];

    dapatkanSemua(): string[] {
        return this.inventaris;
    }

    tambahItem(nama: string): void {
        this.inventaris.push(nama);
        console.log(`Item '${nama}' berhasil ditambahkan ke katalog.`);
    }
}

const service = new LayananKatalogProduk();
console.log("Inventaris:", service.dapatkanSemua());
service.tambahItem("Access Point Wi-Fi 6");
