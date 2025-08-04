
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-birds-flying-in-slow-motion-1536/mp4/mp4?download=true"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-[#1f5fc0]/70 flex items-center justify-center">
        <div className="text-center text-[#ffb354]">
          <h1 className="text-4xl font-bold mb-4 animate-bounce">Welcome to MyAccurate Books</h1>
          <p className="text-xl mb-8 animate-pulse">Your complete accounting solution for business financial management</p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="bg-[#ffb354] text-[#1f5fc0] hover:bg-[#ffb354]/90">
              <Link to="/features">Explore Features</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="text-[#ffb354] border-[#ffb354] hover:bg-[#ffb354]/10"
            >
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
