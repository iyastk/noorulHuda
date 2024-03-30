import React from "react";
import { teachers } from "@/lib/data";
import Card from "@/components/card";

const page = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Teachers
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore our Teachers&apos; Corner for valuable resources, lesson
              plans, and professional development opportunities. Join a
              community of educators dedicated to inspiring and engaging
              students. Empower the next generation with us!
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {teachers.map((el, i) => (
              <Card
                key={i}
                name={el.name}
                position={el.position}
                qualification={el.qualification}
                picture={el.picture}
              ></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
