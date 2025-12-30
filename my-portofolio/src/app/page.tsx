import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-me">
        <div className="text- pt-12">
          <h1 className="text-3xl font-bold underline">
            Hello guys, I&apos;m Esakwa Nkongo Nathan
          </h1>
          <p className="text-[16px]">
            Graduated with a Bachelor’s degree in Computer Science, specializing
            in Application Development, from the University College Leonard De
            Vinci (Institut Paul Lambin), and currently enrolled in a Master’s
            program in Computer Science (evening schedule) at the University of
            Namur. Enthusiastic, social, and determined to contribute my skills
            to your organization. I am eager to learn, committed to hard work,
            and motivated to achieve strong results. Young and driven to gain
            valuable experience in the professional world.
          </p>
        </div>
      </div>
      <div className="home-photo">
        <Image src={"/profile.jpg"} height={100} width={500} alt="profile" />
      </div>
    </div>
  );
}
    