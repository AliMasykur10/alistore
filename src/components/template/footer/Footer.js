import React from "react";

export default function Footer() {
  return (
    <footer className="w-full sm:max-w-7xl mx-auto py-6 px-3">
      <div className="  mx-0 sm:mx-auto px-4 sm:px-0">
        <div className="flex flex-wrap sm:justify-between">
          <div className="w-full sm:w-1/4 lg:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Tentang Kami</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#!">Tentang Perusahaan</a>
              </li>
              <li className="mb-2">
                <a href="#!">Tim Kami</a>
              </li>
              <li className="mb-2">
                <a href="#!">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Bantuan</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#!">Cara Berbelanja</a>
              </li>
              <li className="mb-2">
                <a href="#!">Pembayaran</a>
              </li>
              <li className="mb-2">
                <a href="#!">Pengiriman</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Kategori</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#!">Electronics</a>
              </li>
              <li className="mb-2">
                <a href="#!">Jewelery</a>
              </li>
              <li className="mb-2">
                <a href="#!">Mens Clothing</a>
              </li>
              <li className="mb-2">
                <a href="#!">Womens Clothing</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p>&copy; 2023 Ali Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
