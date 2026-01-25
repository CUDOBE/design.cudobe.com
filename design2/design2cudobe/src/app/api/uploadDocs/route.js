import fs from "fs";
import path from "path";

export async function POST(request) {
  const formData = await request.formData();

  const shippingBill = formData.get("shipping_bill");
  const commercialInvoice = formData.get("commercial_invoice");

  if (!shippingBill || !commercialInvoice) {
    return Response.json(
      { error: "Both shipping_bill and commercial_invoice are required" },
      { status: 400 }
    );
  }

  const uploadDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  // helper function
  const saveFile = async (file, prefix) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop();
    const fileName = `${prefix}_${Date.now()}.${ext}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, buffer);
    return fileName;
  };

  const savedShippingBill = await saveFile(shippingBill, "shipping_bill");
  const savedCommercialInvoice = await saveFile(
    commercialInvoice,
    "commercial_invoice"
  );

  return Response.json({
    success: true,
    files: {
      shipping_bill: savedShippingBill,
      commercial_invoice: savedCommercialInvoice,
    },
  });
}
