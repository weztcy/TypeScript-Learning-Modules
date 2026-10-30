/**
 * Submodul: 222_fetch_api.ts
 * Topik: Fetch API Dasar
 * Tujuan: Melakukan pemanggilan permintaan jaringan HTTP menggunakan Fetch API bawaan.
 */

console.log("=== Fetch API di TypeScript ===");

// Simulasi handler Fetch API
async function demonstrasiFetch(): Promise<void> {
    console.log("[FETCH] Memulai permintaan HTTP ke API simulasi...");
    
    // Pola umum Fetch API terketik
    const simulasiFetch = async (): Promise<{ status: number; data: string }> => {
        return new Promise((resolve) =>
            setTimeout(() => resolve({ status: 200, data: "Respon Server OK" }), 60)
        );
    };

    const respon = await simulasiFetch();
    console.log(`Status HTTP : ${respon.status}`);
    console.log(`Data Badan  : ${respon.data}`);
}

demonstrasiFetch();
