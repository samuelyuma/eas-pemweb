<template>
    <main class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <form @submit.prevent="cekStatusPendaftaran" class="flex flex-col bg-white rounded shadow-lg p-12">
            <div class="flex justify-center">
                <h1 class="font-bold text-2xl">Cek Status Pendaftaranmu!</h1>
            </div>
            <div class="mt-6">
                <label class="font-semibold text-xs mt-3" for="passwordField">Email</label>
                <input
                    v-model="email"
                    class="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 mb-4"
                    type="email"
                />
                <label class="font-semibold text-xs mt-3" for="passwordField">Status Pendaftaran</label>
                <div
                    v-for="(stat, idx) in status"
                    :key="idx"
                    class="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                >
                    {{ stat.status }}
                </div>
                <button
                    type="submit"
                    class="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
                >
                    Cek Status Pendaftaran
                </button>
            </div>
            <div class="flex mt-6 justify-center text-xs">
                <a class="text-blue-400 hover:text-blue-500" href="/">Daftar</a>
            </div>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            status: [],
        };
    },
    methods: {
        async cekStatusPendaftaran() {
            try {
                const req = await fetch(`http://localhost:3000/api/accounts?where[email][equals]=${this.email}`);
                const data = await req.json();
                this.status = data.docs;
            } catch (error) {
                alert('Terdapat kesalahan saat mengambil data: ' + error.message);
            }
        },
    },
};
</script>
