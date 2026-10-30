/**
 * Submodul: 232_dom_attributes.ts
 * Topik: Manipulasi Atribut DOM (setAttribute, getAttribute, hasAttribute)
 * Tujuan: Mengelola atribut HTML elemen secara dinamis dan terstruktur.
 */

console.log("=== Manipulasi Atribut DOM di TypeScript ===");

class ElemenLink {
    private atribut: Map<string, string> = new Map();

    setAttribute(nama: string, nilai: string): void {
        this.atribut.set(nama, nilai);
        console.log(`[SET ATTRIBUTE] ${nama}="${nilai}"`);
    }

    getAttribute(nama: string): string | null {
        return this.atribut.get(nama) ?? null;
    }

    hasAttribute(nama: string): boolean {
        return this.atribut.has(nama);
    }
}

const linkBeranda = new ElemenLink();
linkBeranda.setAttribute("href", "https://belajarts.com");
linkBeranda.setAttribute("target", "_blank");
linkBeranda.setAttribute("rel", "noopener noreferrer");

console.log(`Target URL : ${linkBeranda.getAttribute("href")}`);
console.log(`Punya rel? : ${linkBeranda.hasAttribute("rel")}`);
