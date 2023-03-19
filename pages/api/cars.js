export default function handler(req, res) {
  res.status(200).json([
    {
      id: "xc90-recharge",
      modelName: "XC90 Recharge",
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: "/images/xc90_recharge.jpg",
    },
  ]);
}
