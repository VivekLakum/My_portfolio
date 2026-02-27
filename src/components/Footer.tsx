export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Vivek Lakum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
