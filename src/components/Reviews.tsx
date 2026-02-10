import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Reviews = () => {
  const reviews = [
    {
      name: "Alex C.",
      handle: "@alexc_style",
      text: "I haven't bought physical clothes for my feed in 3 months. Reve is the cheat code.",
      avatar: "/images/avatar1.png"
    },
    {
      name: "Jordan K.",
      handle: "@jordank",
      text: "The tracking on the jewelry is insane. It actually reflects the real world lighting.",
      avatar: "/images/avatar2.png"
    },
    {
      name: "Mia T.",
      handle: "@mia_tech",
      text: "Finally an AR fashion app that doesn't look like a cartoon. This is editorial quality.",
      avatar: "/images/avatar3.png"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center text-white mb-16">
          Verified Fits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback className="bg-zinc-800 text-white">{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-white text-sm">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
