/**
 * Submodul: 275_sql_query_types.ts
 * Topik: Tipe Data Hasil Query SQL
 * Tujuan: Menetapkan tipe statis pada kolom-kolom hasil query database relasional.
 */

console.log("=== Tipe Data Hasil Query SQL di TypeScript ===");

// Tipe baris tabel (Row Type) dari query relasional SQL
interface BarisHasilQueryPengguna {
    user_id: number;
    username: string;
    email: string;
    dibuat_pada: Date;
    total_transaksi: number;
}

// Simulasi fungsi eksekusi query SQL terketik
async function jalankanQuerySQL<T>(query: string, params: any[]): Promise<T[]> {
    console.log(`[SQL EXEC] ${query} | Parameter:`, params);
    // Simulasi hasil baris database
    return [
        {
            user_id: 101,
            username: "hendra_w",
            email: "hendra@perusahaan.id",
            dibuat_pada: new Date("2026-01-15"),
            total_transaksi: 14
        } as unknown as T
    ];
}

const sql = "SELECT u.id AS user_id, u.username, u.email, COUNT(t.id) AS total_transaksi FROM users u JOIN transactions t ON u.id = t.user_id WHERE u.status = $1 GROUP BY u.id;";

jalankanQuerySQL<BarisHasilQueryPengguna>(sql, ["ACTIVE"])
    .then((barisData) => {
        const item = barisData[0];
        console.log(`Pengguna SQL : ${item.username} (${item.email})`);
        console.log(`Total Transaksi: ${item.total_transaksi} transaksi tercatat`);
    });
