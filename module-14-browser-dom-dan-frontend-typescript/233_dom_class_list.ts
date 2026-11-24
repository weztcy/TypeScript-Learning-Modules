/**
 * Submodul: 233_dom_class_list.ts
 * Topik: Manipulasi Class CSS via classList (add, remove, toggle, contains)
 * Tujuan: Mengatur gaya visual antarmuka secara dinamis dengan manipulasi kelas CSS.
 */

console.log("=== Manipulasi classList di TypeScript ===");

class ClassListMock {
    private classes: Set<string> = new Set();

    add(...classNames: string[]): void {
        classNames.forEach((c) => this.classes.add(c));
        console.log(`[CLASS ADD] Menambahkan kelas: ${classNames.join(", ")}`);
    }

    remove(className: string): void {
        this.classes.delete(className);
        console.log(`[CLASS REMOVE] Menghapus kelas: ${className}`);
    }

    contains(className: string): boolean {
        return this.classes.has(className);
    }

    toString(): string {
        return Array.from(this.classes).join(" ");
    }
}

const boxAlert = new ClassListMock();
boxAlert.add("alert", "alert-primary", "shadow-lg");
console.log(`Kelas aktif: "${boxAlert.toString()}"`);

boxAlert.remove("alert-primary");
boxAlert.add("alert-success");
console.log(`Kelas setelah status sukses: "${boxAlert.toString()}"`);
console.log(`Apakah memiliki class 'shadow-lg'? ${boxAlert.contains("shadow-lg")}`);
