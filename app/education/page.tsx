import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  return (
    <div className="mt-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tecnológico de Monterrey – CDMX Campus</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Computer Technologies Engineering — 5th Semester</p>
          <p className="text-muted-foreground">August 2022 – May 2026</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc list-inside">
            <li>MATLAB Onramp</li>
            <li>Introduction to Cisco Packet Tracer</li>
            <li>
              Hackathon Certificates:
              <ul className="list-disc ml-6">
                <li>
                  <a
                    href="https://drive.google.com/file/d/10kfsKX0-bAW-JIpweJ3rw5NogItVHdc5/view"
                    target="_blank"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1ncKh1ghvq527D6OIsooohERdOSCCPXyn/view"
                    target="_blank"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1mRXpVTQ3nQZq02T_y2ZBGxkZcQDyaF7p/view"
                    target="_blank"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Spanish: Native</p>
          <p>English: B2 (PTEG Certification)</p>
        </CardContent>
      </Card>
    </div>
  );
}
