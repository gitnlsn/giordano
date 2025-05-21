const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Giordano Administração. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 