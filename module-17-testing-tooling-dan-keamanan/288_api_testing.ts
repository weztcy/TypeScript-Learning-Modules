/**
 * Submodul: 288_api_testing.ts
 * Topik: Pengujian API (API Testing / E2E)
 * Tujuan: Menguji keabsahan endpoint API HTTP secara menyeluruh (status code, payload JSON, headers).
 */

console.log("=== Pengujian Endpoint API di TypeScript ===");

interface ResponSimulasi {
    status: number;
    badan: {
        sukses: boolean;
        data?: any;
        pesan?: string;
    };
}

async function ujiEndpointKatalog(): Promise<ResponSimulasi> {
    return {
        status: 200,
        badan: {
            sukses: true,
            data: ["Modul 1", "Modul 2", "Modul 3"]
        }
    };
}

async function jalankanPengujianAPI() {
    console.log("Menguji GET /api/v1/modules...");
    const res = await ujiEndpointKatalog();

    const lolosStatus = res.status === 200;
    const lolosBadan = res.badan.sukses && Array.isArray(res.badan.data);

    if (lolosStatus && lolosBadan) {
        console.log(`✓ API TEST PASSED: Status 200 OK & payload valid (${res.badan.data.length} item).`);
    } else {
        console.error("✗ API TEST FAILED!");
    }
}

jalankanPengujianAPI();
