import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <div className="mt-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Robot Autónomo – Obstacle Detection & Environment Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• Developed a robot movement system using Python.</p>
          <p>• Integrated temperature sensors and motor controls.</p>
          <p>
            • Connected data to a MySQL database hosted on AWS for real-time
            logging.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Video Game Developer – Escuela Metropolitana La Luz (CDMX)
          </CardTitle>
          <p className="text-sm text-muted-foreground">Feb 2024 – May 2024</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• Built an escape room-style game using Unity and C#.</p>
          <p>• Created the front-end using HTML, CSS, and JavaScript.</p>
          <p>• Collaborated on the backend logic and database handling.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Animation Developer – Black and Gold American Football A.C. (CDMX)
          </CardTitle>
          <p className="text-sm text-muted-foreground">Jun 2023 – Jul 2023</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• Designed animations and motion sequences using Godot.</p>
          <p>
            • Programmed logic for object positioning and trajectory saving with
            custom labels.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>iOS App Developer – ITESM & Skiliket (CDMX)</CardTitle>
          <p className="text-sm text-muted-foreground">Aug 2024 – Oct 2024</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• Developed an iOS application using Swift and Xcode.</p>
        </CardContent>
      </Card>
    </div>
  );
}
