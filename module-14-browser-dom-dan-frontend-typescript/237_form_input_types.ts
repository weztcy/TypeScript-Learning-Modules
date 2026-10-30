/**
 * Submodul: 237_form_input_types.ts
 * Topik: Tipe Input Formulir (HTMLSelectElement, HTMLInputElement)
 * Tujuan: Memvalidasi input formulir bertipe dropdown dan checkbox secara spesifik.
 */

console.log("=== Tipe Input Formulir di TypeScript ===");

interface DropdownPilihan {
    selectedIndex: number;
    value: string;
    options: string[];
}

interface KotakCentang {
    checked: boolean;
    name: string;
}

const selectPaket: DropdownPilihan = {
    selectedIndex: 1,
    value: "PAKET_PREMIUM",
    options: ["PAKET_DASAR", "PAKET_PREMIUM", "PAKET_ENTERPRISE"]
};

const persetujuanSyarat: KotakCentang = {
    checked: true,
    name: "terms_and_conditions"
};

console.log(`Pilihan Paket : ${selectPaket.value}`);
console.log(`Syarat & Ketentuan Disetujui? ${persetujuanSyarat.checked ? "YA" : "TIDAK"}`);
