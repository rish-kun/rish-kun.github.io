"use client";

import dynamic from "next/dynamic";

const WireframeMesh = dynamic(() => import("./WireframeMesh"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function WireframeMeshClient() {
  return <WireframeMesh />;
}
