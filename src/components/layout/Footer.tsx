export const Footer = () => {
  return (
    <footer className="bg-[rgba(0,6,102,1)] flex w-full flex-col items-stretch justify-center mt-[70px] px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full items-center gap-[40px_48px] flex-wrap max-md:max-w-full">
        <div className="self-stretch text-2xl text-white font-bold leading-[1.1] my-auto">
          <div className="flex gap-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/70aa3f0e4e7a3ca26819be9b7df8ed2f14f908915862b4800e688de7fb351669"
              className="aspect-[0.96] object-contain w-[25px] shrink-0"
              alt="Fuel Sure Logo"
            />
            <span>Fuel Sure</span>
          </div>
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-4 text-base text-white font-medium whitespace-nowrap leading-none flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <a href="/support" className="self-stretch gap-2 my-auto px-2 py-3">
            Support
          </a>
          <span className="self-stretch gap-2 my-auto px-2 py-3">
            47685787583
          </span>
        </div>
      </div>

      <div className="bg-[#C1C7CD] flex min-h-px w-full mt-12 max-md:max-w-full max-md:mt-10" />

      <div className="flex w-full gap-[40px_48px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        <div className="text-white text-sm font-normal leading-[1.4]">
          Fuel Sure @ 2025. All rights reserved.
        </div>

        <div className="flex min-w-60 items-center gap-4 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          {[
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/716ee5b713894e67a84af54311da239363bc1aa9f54418141c9e2523ff6d0e66",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/101052c6aa9878bbc2a5772460967337e09e6b1b65815c33866fd4b5c49120dd",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/c837c10fbe808e58be273ca9a216443cbe7b93c6d8b49724ea5589c7325b65fb",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/86b8073202f00589da5c4355323cb2424e40a736e32a7bdcce3d7c1454f12813",
            "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/1885e5c9a9af0f6b879bf903daf6851cd4204deaf567e2a2ed933ffa2237f028",
          ].map((src, index) => (
            <img
              key={index}
              loading="lazy"
              src={src}
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt={`Social Media ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
