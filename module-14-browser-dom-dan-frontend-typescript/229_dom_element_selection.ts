/**
 * Submodul: 229_dom_element_selection.ts
 * Topik: Memilih Elemen DOM (document.getElementById & querySelector)
 * Tujuan: Mengambil referensi elemen HTML dengan type assertion spesifik.
 */

console.log("=== Memilih Elemen DOM di TypeScript ===");

// Simulasi lingkungan DOM untuk demonstrasi runtime Node.js
class MockElement {
    constructor(public id: string, public tagName: string = "div") {}
}

const mockDoc = {
    getElementById(id: string): MockElement | null {
        return id === "tombol-simpan" ? new MockElement(id, "button") : null;
    },
    querySelector(selector: string): MockElement | null {
        return selector.startsWith(".") ? new MockElement(selector, "span") : null;
    }
};

// Mengambil elemen tombol dengan type narrowing
const tombolSimpan = mockDoc.getElementById("tombol-simpan");

if (tombolSimpan) {
    console.log(`Elemen tombol ditemukan: <${tombolSimpan.tagName} id="${tombolSimpan.id}">`);
} else {
    console.log("Elemen tombol tidak ditemukan di dokumen HTML.");
}

const labelPesan = mockDoc.querySelector(".label-status");
if (labelPesan) {
    console.log(`Elemen label ditemukan: <${labelPesan.tagName} class="${labelPesan.id}">`);
}
