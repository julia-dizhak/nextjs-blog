import Image from "next/image";

export default function Me() {
  return (
    <>
      <h1>Julia Dizhak</h1>

      <Image
        src="/images/profile.jpg"
        height={81}
        width={144}
        alt="Your Name"
      />
    </>
  );
}
