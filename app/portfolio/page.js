"use client";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/assets/assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PortfolioDetails = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="container mx-auto py-32">
      <h1 className="text-4xl font-bold text-center mb-8 font-Ovo">
        My Projects
      </h1>
      <div className="flex flex-col items-center gap-6">
        {portfolioData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/50 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-8/12 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-black text-center dark:text-gray-50">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4 dark:text-white font-semibold">
              {project.description}
            </p>
            {project.functionalities.length > 0 && (
              <ul className="list-disc list-inside mb-4">
                {project.functionalities.map((func, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-200">
                    {func}
                  </li>
                ))}
              </ul>
            )}
            {project.tools.length > 0 && (
              <p className="text-sm text-gray-500 mb-4 dark:text-sky-600">
                <span className="font-semibold">Tools Used:</span>{" "}
                {project.tools.join(", ")}
              </p>
            )}

            {/* Image Gallery */}
            <div className="flex gap-4 justify-center flex-wrap">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer"
                  onClick={() => handleImageClick(img)}
                >
                  <Image
                    src={img}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-center text-blue-500 hover:underline self-start"
              >
                {" "}
                <button className="border rounded-lg p-2 text-sm bg-blue-50 dark:bg-sky-900 dark:text-white">
                  View Project ↗
                </button>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Project"
              width={800} // Adjust for large view
              height={500}
              className="rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioDetails;
