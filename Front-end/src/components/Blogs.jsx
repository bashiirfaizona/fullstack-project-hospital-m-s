import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore our newest health insights and expert medical advice to support your wellness journey.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard 
            img={img1} 
            headlines="Unraveling the Mysteries of Sleep"
            description="Discover the science behind sleep cycles and learn practical tips for improving sleep quality and duration for better overall health."
          />
          <BlogCard 
            img={img2} 
            headlines="The Heart-Healthy Diet"
            description="Explore nutritional strategies and food choices that can significantly reduce cardiovascular risks and promote heart health."
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
            description="A comprehensive guide to childhood immunization schedules and their crucial role in preventing serious diseases."
          />
          <BlogCard 
            img={img4} 
            headlines="Navigating Mental Health"
            description="Learn about recognizing mental health symptoms and effective strategies for maintaining emotional wellbeing in daily life."
          />
          <BlogCard 
            img={img5} 
            headlines="The Importance of Regular Exercise"
            description="Understand how consistent physical activity benefits all body systems and contributes to longevity and quality of life."
          />
          <BlogCard 
            img={img6} 
            headlines="Skin Health 101"
            description="Essential dermatological knowledge about protecting your skin from environmental damage and maintaining healthy skin at any age."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;