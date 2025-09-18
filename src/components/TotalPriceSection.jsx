export default function TotalPriceSection({finalPrice}) {
  return (
    <section className="total-price flex items-center justify-between py-2">
      <p className="text-Rose-500">Order Total</p>
      <strong className="text-xl">${finalPrice}</strong>
    </section>
  );
}
