import React from "react"
import { Box, Typography } from "@mui/material"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"

const Certificate = ({ Title, Issuer, Date, CredentialId, Skills }) => {
	return (
		<Box
			className="group relative w-full h-full"
			sx={{
				borderRadius: 3,
				background: "linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.9))",
				border: "1px solid rgba(255,255,255,0.1)",
				backdropFilter: "blur(10px)",
				padding: "1.5rem",
				transition: "all 0.3s ease-in-out",
				overflow: "hidden",
				"&:hover": {
					transform: "translateY(-5px)",
					border: "1px solid rgba(139,92,246,0.3)",
					boxShadow: "0 10px 30px -10px rgba(139,92,246,0.3)",
				},
			}}>
			
			<Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
				<Box sx={{ 
					p: 1.5, 
					borderRadius: 2, 
					bgcolor: "rgba(139,92,246,0.1)",
					color: "#a78bfa" 
				}}>
					<WorkspacePremiumIcon fontSize="large" />
				</Box>
				
				<Box sx={{ flex: 1 }}>
					<Typography variant="h6" sx={{ 
						fontWeight: 700, 
						color: "white",
						lineHeight: 1.3,
						fontSize: "1.1rem",
						mb: 0.5 
					}}>
						{Title}
					</Typography>
					<Typography sx={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: 500 }}>
						{Issuer}
					</Typography>
				</Box>
			</Box>

			<Box sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
				<Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
					<Typography sx={{ color: "#64748b", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1 }}>
						Issued
					</Typography>
					<Typography sx={{ color: "#cbd5e1", fontSize: "0.85rem" }}>
						{Date}
					</Typography>
				</Box>
				
				{CredentialId && (
					<Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
						<Typography sx={{ color: "#64748b", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1 }}>
							ID
						</Typography>
						<Typography sx={{ color: "#cbd5e1", fontSize: "0.85rem", fontFamily: "monospace" }}>
							{CredentialId}
						</Typography>
					</Box>
				)}

				{Skills && (
					<Box sx={{ mt: 2 }}>
						<Typography sx={{ color: "#64748b", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
							Skills Focus
						</Typography>
						<Typography sx={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 500, lineHeight: 1.4 }}>
							{Skills}
						</Typography>
					</Box>
				)}
			</Box>
			
			<Box sx={{
				position: "absolute",
				top: "-50px",
				right: "-50px",
				width: "100px",
				height: "100px",
				background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))",
				filter: "blur(40px)",
				borderRadius: "50%",
				zIndex: -1,
			}} />
		</Box>
	)
}

export default Certificate

