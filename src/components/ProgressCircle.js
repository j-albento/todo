import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProgressCircle() {
	const [progress, setProgress] = useState(0);

	return <CircularProgress variant="determinate" value={progress} />;
}
