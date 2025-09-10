import { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  CircularProgress,
  Alert,
  Avatar,
  LinearProgress,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Store,
  TrendingUp,
  Warning,
  AccountBalance,
  Star,
  ArrowBack,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { getScoreColor, getTierColor } from "../utils";

const MerchantDetail = () => {
  const [merchantData, setMerchantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Simulate API call
  useEffect(() => {
    const fetchMerchantData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dummy API response
        const data = {
          MerchantID: "M001",
          MerchantName: "Merchant A",
          RepaymentRate: 0.98,
          DisputeCount: 1,
          DefaultRate: 0.01,
          TransactionVolume: 120,
          TrustScore: 96.7,
          LoyaltyTier: "Gold",
        };

        setMerchantData(data);
      } catch (err) {
        setError(`Failed to fetch merchant data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMerchantData();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="400px"
        >
          <CircularProgress size={60} />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton onClick={() => navigate("/")} sx={{ color: "#1976d2" }}>
          <ArrowBack />
        </IconButton>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Merchant Profile
        </Typography>
      </Box>

      {/* Main Profile Card */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar
            sx={{
              bgcolor: "#1976d2",
              width: 80,
              height: 80,
              fontSize: "2rem",
              mr: 3,
            }}
          >
            <Store sx={{ fontSize: "3rem" }} />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              {merchantData.MerchantName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              ID: {merchantData.MerchantID}
            </Typography>
            <Chip
              label={merchantData.LoyaltyTier}
              sx={{
                backgroundColor: getTierColor(merchantData.LoyaltyTier),
                color: "#000",
                fontWeight: "bold",
                fontSize: "0.875rem",
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{
                color: getScoreColor(merchantData.TrustScore),
                fontWeight: "bold",
              }}
            >
              {merchantData.TrustScore}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Trust Score
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {/* Repayment Rate */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <TrendingUp sx={{ color: "#4CAF50", mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Repayment Rate
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "#4CAF50", fontWeight: "bold", mb: 1 }}
              >
                {(merchantData.RepaymentRate * 100).toFixed(1)}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={merchantData.RepaymentRate * 100}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#E8F5E8",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#4CAF50",
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Default Rate */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Warning sx={{ color: "#FF5722", mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Default Rate
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "#FF5722", fontWeight: "bold", mb: 1 }}
              >
                {(merchantData.DefaultRate * 100).toFixed(1)}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={merchantData.DefaultRate * 100}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#FFF3E0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FF5722",
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Transaction Volume */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AccountBalance sx={{ color: "#1976d2", mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Transaction Volume
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "#1976d2", fontWeight: "bold" }}
              >
                {merchantData.TransactionVolume}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Transactions
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Dispute Count */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Star sx={{ color: "#FF9800", mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Dispute Count
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  color:
                    merchantData.DisputeCount === 0 ? "#4CAF50" : "#FF9800",
                  fontWeight: "bold",
                }}
              >
                {merchantData.DisputeCount}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active Disputes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Summary Section */}
      <Paper elevation={3} sx={{ p: 3, mt: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          This merchant demonstrates strong business reliability with a trust
          score of <strong>{merchantData.TrustScore}</strong> and maintains{" "}
          {merchantData.LoyaltyTier} tier status. With a{" "}
          {(merchantData.RepaymentRate * 100).toFixed(1)}% repayment rate,{" "}
          {merchantData.TransactionVolume} total transactions, and{" "}
          {merchantData.DisputeCount} active dispute
          {merchantData.DisputeCount !== 1 ? "s" : ""}, this merchant represents
          a{" "}
          {merchantData.TrustScore >= 90
            ? "low"
            : merchantData.TrustScore >= 70
            ? "moderate"
            : "high"}
          -risk profile for business partnerships and credit decisions.
        </Typography>
      </Paper>
    </Container>
  );
};

export default MerchantDetail;
