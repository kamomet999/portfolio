import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden px-8 py-16 md:p-20 text-center">
          {/* Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-fresh-500 rounded-full blur-[120px] opacity-20" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-blue-500 rounded-full blur-[120px] opacity-20" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              未来のキッチンライフを、
              <br />
              今すぐ体験しましょう。
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy-100 text-lg mb-10 max-w-xl mx-auto"
            >
              このプロジェクトは現在も開発中です。
              実際のデモを触って、フィードバックをいただけると嬉しいです。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="https://smart-pantry-tracker-nine.vercel.app/" target="_blank">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-fresh-500 hover:bg-fresh-400 text-white border-none shadow-xl shadow-fresh-900/20"
                >
                  アプリを試す
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/projects/chefs-market">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
                >
                  次のプロジェクトへ
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
