import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <section className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">Diego Muñoz</h1>
        <p className="text-muted-foreground mb-4 italic">
          Computer Technologies Engineering Student
        </p>
        <p className="leading-relaxed">
          I’m a passionate student focused on frontend development. Creativity
          is my greatest strength, allowing me to approach challenges from new
          angles. As a Peer Mentor, I’ve developed an empathetic and
          collaborative leadership style.
        </p>
      </div>
    </section>
  );
}
