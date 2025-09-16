"use client"
import Image from "next/image"

const reviewsTab = [
  { id: 1, avatar: "/profil/addicted.png", stars: 5, comment: "La facilité pour suivre une séance est vraiment très agréable", username: "@axl_frns" },
  { id: 2, avatar: "/profil/black.png", stars: 5, comment: "Je suis en train de tester le programme et j'adore !", username: "@juuduclos" },
  { id: 3, avatar: "/profil/regular.png", stars: 5, comment: "Un programme digne de ce nom, je recommande !", username: "@alexandre_glt" },
  { id: 4, avatar: "/profil/week.png", stars: 5, comment: "facile, intuitif, efficace !", username: "@jane.dcls" },
  { id: 5, avatar: "/profil/regular.png", stars: 5, comment: "La facilité pour suivre une séance est vraiment très agréable", username: "@bilyRez" },
  { id: 6, avatar: "/profil/addicted.png", stars: 5, comment: "La facilité pour suivre une séance est vraiment très agréable", username: "@leo_mrt" },
]

const GenerateStars = ({ stars }) => (
  <div className="flex justify-center gap-1 mt-1" aria-hidden>
    {[...Array(stars)].map((_, i) => (
      <Image key={i} src="/reviews/rating.png" width={16} height={16} alt="star" />
    ))}
  </div>
)

 const Review = ({ avatar, username, stars, comment }) => {

  return (
    <div className="w-[180px] md:w-[200px] shrink-0 text-center">
      <div className="bg-white w-[84px] h-[84px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full mx-auto flex items-center justify-center">
        <Image src={avatar} className="rounded-full md:w-[80px] md:h-[80px]  xl:w-[100px] xl:h-[100px]  " width={64} height={64} alt={`${username} avatar`} />
      </div>
      <p className="text-white font-bold mt-2">{username}</p>
      <GenerateStars stars={stars} />
      <p className="text-white font-regular text-sm mt-1">{comment}</p>
    </div>
  )
}

export const ReviewsList = () => {
  // Duplicate the list to enable seamless looping (50% shift)
  const loop = [...reviewsTab, ...reviewsTab,...reviewsTab]

  

  return (
    <div className="overflow-hidden bg-[#008CFF] py-10">
      <div className="marquee flex gap-8 pointer-events-none">
        {loop.map((r, idx) => {
            
          return (
            <Review
              key={`${r.id}-${idx}`}
              avatar={r.avatar}
              username={r.username}
              stars={r.stars}
              comment={r.comment}
            />
          )
        })}
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        @media (hover: hover) and (pointer: fine) {
          .marquee:hover {
            animation-play-state: paused;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}

export default ReviewsList