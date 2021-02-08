import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, uid }) => {
  const { docs } = useFirestore("images", uid);
  // console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
              className="img-wrap"
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src={doc.url}
                alt={doc.url.substr(0, 10)}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
