import RenderImage from "@/components/RenderImage";
import fetchLogo from "@/lib/sanity/fetchLogo";
import Link from "next/link";
import React from "react";

export default async function CollectionCard({ collection }) {
  const logoOnlyWhite = await fetchLogo("logo-only-white");

  const { name, image, link } = collection;
  return (
    <div className="m-7 bg-white p-7">
      <div className="card  relative w-80 md:size-96">
        <RenderImage image={image} className="max-w-full" sizes="24rem" fill />
        <div className="overlay absolute left-0 top-0 flex size-full flex-col p-3">
          <RenderImage
            image={logoOnlyWhite.image}
            className="hidden w-12 md:block"
            sizes="(max-width: 768px) 50vw, 30vw"
          />
          <div className="content mt-auto text-center text-white">
            <h2 className="title mb-3 text-xl font-bold">{name}</h2>
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-white hover:bg-neon-green"
              >
                View More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

CollectionCard;
