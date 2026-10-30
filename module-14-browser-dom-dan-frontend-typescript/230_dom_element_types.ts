/**
 * Submodul: 230_dom_element_types.ts
 * Topik: Tipe Elemen DOM Spesifik (HTMLInputElement, HTMLButtonElement, HTMLCanvasElement)
 * Tujuan: Memahami hierarki tipe elemen DOM agar dapat mengakses properti khusus seperti .value atau .disabled.
 */

console.log("=== Tipe Elemen DOM Spesifik ===");

interface MockHTMLInputElement {
    value: string;
    type: string;
    disabled: boolean;
}

interface MockHTMLButtonElement {
    textContent: string;
    disabled: boolean;
}

// Simulasi elemen input teks
const inputEmail: MockHTMLInputElement = {
    value: "pengguna@domain.id",
    type: "email",
    disabled: false
};

// Simulasi elemen tombol submit
const tombolKirim: MockHTMLButtonElement = {
    textContent: "Kirim Formulir",
    disabled: false
};

console.log(`Tipe Input: <input type="${inputEmail.type}" value="${inputEmail.value}">`);
console.log(`Tombol: <button disabled="${tombolKirim.disabled}">${tombolKirim.textContent}</button>`);
console.log("TypeScript memberikan keamanan tipe penuh atas properti elemen HTML!");
