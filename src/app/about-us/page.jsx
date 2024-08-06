import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Image
          src="/1.jpg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="absolute flex flex-col justify-center items-start w-full h-[70vh] pl-10">
        <div className="">
          <p className="text-5xl font-bold text-white">About Us</p>
        </div>
      </div>
      <div className="flex flex-col py-10 px-52 gap-4 text-justify">
        <p>
          Selamat datang di Fujisan, distributor dan supplier lampu LED terbesar
          di Indonesia! Sebagai pemimpin dalam industri pencahayaan, Fujisan
          berdedikasi untuk menyediakan solusi pencahayaan terbaik bagi bisnis
          dan industri di seluruh Indonesia.
        </p>
        <p>
          Komitmen kami terhadap kualitas dan inovasi membuat Fujisan menjadi
          mitra terpercaya bagi pelanggan kami. Dengan stok produk yang luas dan
          beragam, kami menawarkan lampu LED berkualitas tinggi yang dirancang
          untuk memenuhi berbagai kebutuhan pencahayaan, mulai dari ruang
          perkantoran hingga pabrik industri.
        </p>
        <p>
          Kami memahami betapa pentingnya pencahayaan yang efisien dan ramah
          lingkungan bagi kesuksesan bisnis Anda. Itulah mengapa kami
          terus-menerus mencari produk-produk terbaru dan teknologi terdepan
          dalam industri ini, untuk memberikan solusi pencahayaan yang hemat
          energi dan berkelanjutan kepada pelanggan kami.
        </p>
        <p>
          Selain menyediakan produk berkualitas tinggi, kami juga menempatkan
          pelayanan pelanggan di tengah perhatian kami. Tim kami yang
          berpengalaman siap membantu Anda dalam memilih produk yang tepat,
          memberikan saran ahli, dan menyediakan dukungan teknis yang Anda
          butuhkan.
        </p>
        <p>
          Fujisan bangga menjadi bagian dari upaya untuk menciptakan lingkungan
          yang lebih terang, efisien, dan berkelanjutan di Indonesia. Kami
          mengundang Anda untuk bergabung dengan ribuan pelanggan kami yang puas
          dan merasakan perbedaan Fujisan dalam pencahayaan.
        </p>
        <p>
          Jika Anda mencari distributor dan supplier lampu LED terbesar di
          Indonesia yang dapat diandalkan, Fujisan adalah pilihan yang tepat.
          Hubungi kami hari ini untuk menemukan solusi pencahayaan terbaik untuk
          bisnis Anda!
        </p>
      </div>
    </div>
  );
}
