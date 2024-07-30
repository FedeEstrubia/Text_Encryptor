import "./App.css";
import { motion } from "framer-motion";
import LogoAlura from "./components/SvgCreate/logoAluraFill";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Avatar,
} from "@nextui-org/react";

function App() {
  const [text, setText] = useState("");
  const [textEncrypted, setTextEncrypted] = useState("");
  const [textDesencrypted, setTextDesencrypted] = useState("");
  const [remainingEncryptions, setRemainingEncryptions] = useState(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter !== null ? parseInt(savedCounter, 10) : 100;
  });
  const [buttonCopy, setButtonCopy] = useState(false);

  let lastEncryption = "";

  localStorage.getItem("initialTheme") === null &&
    localStorage.setItem("initialTheme", 1);
  const [theme, setTheme] = useState(localStorage.getItem("initialTheme"));

  /** COLORS FOR THE THEMES */
  const colors = [
    /**LIGHT BLUE */
    {
      bg100: "bg-[#F6F6F6]",
      bg150: "bg-[#f0f0f0]",
      bg200: "bg-[#D6E4F0]",
      bg300: "bg-[#1E56A0]",
      text100: "text-[#F6F6F6]",
      textHistory: "text-[#163172]",
      text300: "text-[#1E56A0]",
      textAscent: "text-[#1E56A0] text-2xl font-bold",
      textAscentM: "text-[#1E56A0] text-[1.2rem] font-bold",
      textAscent2: "text-[#1E56A0] text-2xl font-regular",
      textAscentM2: "text-[#1E56A0] text-[1.2rem] font-regular",
      border300: "border-[#1E56A0]",
      placeholder: "placeholder-[#1E56A0]",
      textAlerta: "text-[#495057]",
      textButtonEncriptar: "text-[#F6F6F6]",
      msg: "bg-[#DFEEFA]",
      textArea: "focus:bg-[#D6E4F0]",

      c200: "[#D6E4F0]",
      c300: "[#1E56A0]",
      c400: "[#163172]",
      c500: "[#00204A]",
    },
    /**DARK BLUE */
    {
      bg100: "bg-[#00204A]",
      bg150: "bg-[#02224c]",
      bg200: "bg-[#072B61]",
      bg300: "bg-[#00BBF0]",
      text100: "text-[#D9FAFF]",
      textHistory: "text-[#297A7F]",
      text300: "text-[#00BBF0]",
      textAscent: "text-[#00BBF0] text-2xl font-bold",
      textAscentM: "text-[#00BBF0] text-[1.2rem] font-bold",
      textAscent2: "text-[#00BBF0] text-2xl font-regular",
      textAscentM2: "text-[#00BBF0] text-[1.2rem] font-regular",
      border300: "border-[#00BBF0]",
      placeholder: "placeholder-[#00BBF0]",
      textAlerta: "text-[#ADB5BD]",
      textButtonEncriptar: "text-[#072B61]",
      msg: "bg-[#10346A]",
      textArea: "focus:bg-[#072B61]",

      c100: "[#D9FAFF]",
      c200: "[#005792]",
      c300: "[#00BBF0]",
      c400: "[#072B61]",
      c500: "[#00204A]",
    },
    /**LIGHT VIOLET */
    {
      bg100: "bg-[#D5A6BD]",
      bg150: "bg-[#D0A1B8]",
      bg200: "bg-[#C39BD3]",
      bg300: "bg-[#8E44AD]",
      text100: "text-[#F7C8DF]",
      textHistory: "text-[#8E44AD]",
      text300: "text-[#8E44AD]",
      textAscent: "text-[#6C3483] text-2xl font-bold",
      textAscentM: "text-[#6C3483] text-[1.2rem] font-bold",
      textAscent2: "text-[#6C3483] text-2xl font-regular",
      textAscentM2: "text-[#6C3483] text-[1.2rem] font-regular",

      border300: "border-[#6C3483]",
      placeholder: "placeholder-[#8E44AD]",
      textAlerta: "text-[#495057]",
      textButtonEncriptar: "text-[#F7C8DF]",
      msg: "bg-[#CD95DD]",
      textArea: "focus:bg-[#C39BD3]",

      c100: "[#D5A6BD]",
      c200: "[#C39BD3]",
      c300: "[#8E44AD]",
      c400: "[#6C3483]",
      c500: "[#4A235A]",
    },
    /**DARK VIOLET */
    {
      bg100: "bg-[#4A235A]",
      bg150: "bg-[#4d265d]",
      bg200: "bg-[#6C3483]",
      bg300: "bg-[#8E44AD]",
      text100: "text-[#D5A6BD]",
      textHistory: "text-[#C39BD3]",
      text300: "text-[#C39BD3]",
      textAscent: "text-[#D5A6BD] text-2xl font-bold",
      textAscentM: "text-[#D5A6BD] text-[1.2rem] font-bold",
      textAscent2: "text-[#D5A6BD] text-2xl font-regular",
      textAscentM2: "text-[#D5A6BD] text-[1.2rem] font-regular",
      border300: "border-[#8E44AD]",
      placeholder: "placeholder-[#8E44AD]",
      textAlerta: "text-[#D5A6BD]",
      textButtonEncriptar: "text-[#F7C8DF]",
      msg: "bg-[#763D8C]",
      textArea: "focus:bg-[#6C3483]",

      c100: "[#D5A6BD]",
      c200: "[#C39BD3]",
      c300: "[#8E44AD]",
      c400: "[#6C3483]",
      c500: "[#4A235A]",
    },
    /** LIGHT ORANGE  */
    {
      bg100: "bg-[#FEE8D8]",
      bg150: "bg-[#F8E2D2]",
      bg200: "bg-[#F7C6C0]",
      bg300: "bg-[#E67E22]",
      text100: "text-[#FEE8D8]",
      textHistory: "text-[#E67E22]",
      text300: "text-[#E67E22]",
      textAscent: "text-[#D35400] text-2xl font-bold",
      textAscentM: "text-[#D35400] text-[1.2rem] font-bold",
      textAscent2: "text-[#D35400] text-2xl font-regular",
      textAscentM2: "text-[#D35400] text-[1.2rem] font-regular",
      border300: "border-[#F39C12]",
      placeholder: "placeholder-[#E67E22]",
      textAlerta: "text-[#F39C12]",
      textButtonEncriptar: "text-[#FEE8D8]",
      msg: "bg-[#FfCfC9]",
      textArea: "focus:bg-[#F7C6C0]",

      c100: "[#FEE8D8]",
      c200: "[#F7C6C0]",
      c300: "[#F39C12]",
      c400: "[#E67E22]",
      c500: "[#D35400]",
    },
  ];

  const decrement = () => {
    if (
      lastEncryption !== textDesencrypted &&
      lastEncryption !== textEncrypted &&
      remainingEncryptions > 0
    ) {
      let newCount = remainingEncryptions - 1;
      setRemainingEncryptions(newCount);
      localStorage.setItem("counter", remainingEncryptions);
    }
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const desencrypt = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  const encrypt = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const encriptador = (text, map) => {
    let newText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const [a, b] of Object.entries(map)) {
      const regex = new RegExp(a, "gi");
      newText = newText.replace(regex, b);
    }
    return (
      setTextEncrypted(newText),
      (lastEncryption = newText),
      setTextDesencrypted("")
    );
  };

  const desencriptador = (text, map) => {
    let newText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    for (const [a, b] of Object.entries(map)) {
      const regex = new RegExp(a, "gi");
      newText = newText.replace(regex, b);
    }
    return (
      setTextDesencrypted(newText),
      (lastEncryption = newText),
      setTextEncrypted("")
    );
  };
  /** BUTTON VARIANTS TRANSITIONS */
  const buttonVariants = {
    initial: { scale: 0 },
    inView: {
      scale: 1,
      transition: {
        duration: 1,
        delay: 0,
        ease: "easeInOut",
        damping: 14,
        type: "spring",
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: { delay: 0 },
    },
  };

  /** COPY FUNCTION AND POPEVENT */
  const btnCopy = (text) => {
    navigator.clipboard.writeText(text);
    setButtonCopy(true);
    setTimeout(() => {
      setButtonCopy(false);
    }, 1800);
  };

  return (
    <div
      className={`flex flex-col  items-center justify-end p-8 sm:p-10 w-screen min-h-screen ${colors[theme].bg100} lg:flex-row lg:gap-12 transition-colors duration-500 min-w-[370px]`}
    >
      <LogoAlura />

      {/** BUTTONS THEMES DESKTOP */}
      <div className="hidden lg:flex absolute top-2 left-[28vw] flex gap-3">
        <motion.button
          className={`${colors[theme].bg200} ${colors[theme].text300} hover:${colors[0].bg200} hover:${colors[0].text300} `}
          onClick={() => {
            setTheme(0), localStorage.setItem("initialTheme", 0);
          }}
          initial={{ y: -550 }}
          animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          LightBlue
        </motion.button>
        <motion.button
          className={`${colors[theme].bg200} ${colors[theme].text300} hover:${colors[1].bg200} hover:${colors[1].text300} `}
          onClick={() => {
            setTheme(1), localStorage.setItem("initialTheme", 1);
          }}
          initial={{ y: -250 }}
          animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          DarkBlue
        </motion.button>
        <motion.button
          className={`${colors[theme].bg200} ${colors[theme].text300} hover:${colors[2].bg300} hover:${colors[2].text100} `}
          onClick={() => {
            setTheme(2), localStorage.setItem("initialTheme", 2);
          }}
          initial={{ y: -150 }}
          animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          LightViolet
        </motion.button>
        <motion.button
          className={`${colors[theme].bg200} ${colors[theme].text300} hover:${colors[3].bg300} hover:${colors[3].text300} `}
          onClick={() => {
            setTheme(3), localStorage.setItem("initialTheme", 3);
          }}
          initial={{ y: -250 }}
          animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          DarkViolet
        </motion.button>
        <motion.button
          className={`${colors[theme].bg200} ${colors[theme].text300} hover:${colors[4].bg200} hover:${colors[4].text300}`}
          onClick={() => {
            setTheme(4), localStorage.setItem("initialTheme", 4);
          }}
          initial={{ y: -550 }}
          animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
          whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          LightOrange
        </motion.button>
      </div>

      {/** BUTTONS THEMES MOBILE */}
      <div className="absolute flex justify-center w-full top-2 flex ">
        <div className="lg:hidden flex justify-between  ml-6 gap-1 sm:w-[40%]">
          <motion.button
            className={`${colors[theme].bg200} ${colors[theme].text300} p-[6px] text-sm`}
            onClick={() => {
              setTheme(0), localStorage.setItem("initialTheme", 0);
            }}
            initial={{ y: -600 }}
            animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
            whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            LightB
          </motion.button>
          <motion.button
            className={`${colors[theme].bg200} ${colors[theme].text300} p-[6px] text-sm`}
            onClick={() => {
              setTheme(1), localStorage.setItem("initialTheme", 1);
            }}
            initial={{ y: -300 }}
            animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
            whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            DarkB
          </motion.button>
          <motion.button
            className={`${colors[theme].bg200} ${colors[theme].text300} p-[6px] text-sm`}
            onClick={() => {
              setTheme(2), localStorage.setItem("initialTheme", 2);
            }}
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
            whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            LightV
          </motion.button>
          <motion.button
            className={`${colors[theme].bg200} ${colors[theme].text300} p-[6px] text-sm`}
            onClick={() => {
              setTheme(3), localStorage.setItem("initialTheme", 3);
            }}
            initial={{ y: -300 }}
            animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
            whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            DarkV
          </motion.button>
          <motion.button
            className={`${colors[theme].bg200} ${colors[theme].text300} p-[6px] text-sm`}
            onClick={() => {
              setTheme(4), localStorage.setItem("initialTheme", 4);
            }}
            initial={{ y: -600 }}
            animate={{ y: 0, transition: { duration: 3 }, ease: "easeInOut" }}
            whileHover={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            LightO
          </motion.button>
        </div>
      </div>

      {/** TEXTAREA AND MORE */}
      <div className="flex flex-col justify-between items-center w-full h-full sm:p-8">
        <motion.div
          initial={{ scale: 0.7, y: -300, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            damping: 10,
            type: "spring",
          }}
          className="h-[30vh] sm:h-[40vh] lg:h-[60vh] w-full mt-24 mb-4 lg:pl-80 lg:pr-24"
        >
          <textarea
            value={text}
            onChange={handleText}
            type="text"
            placeholder="Ingrese el texto aquí"
            className={`flex ${colors[theme].text300} ${colors[theme].placeholder}  
            ${colors[theme].bg150} ${colors[theme].textArea} focus:bg-opacity-50 outline-none rounded-3xl w-full h-full text-4xl p-2 lg:text-5xl sm:text-start transition-colors duration-1500 Z-20`}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          className="flex w-full items-center text-start lg:pl-80  z-0"
        >
          <img className="pl-2 size-7 " src="/interrogacion.svg" alt="" />
          <p
            className={`${colors[theme].textAlerta} hidden sm:flex items-center pl-2 text-[0.8rem] transition-colors duration-500`}
          >
            {remainingEncryptions === 100
              ? `Tienes ${remainingEncryptions} encriptaciones Gratuitas!! Aprovechalas..`
              : `Te quedan ${remainingEncryptions} encriptaciones Gratuitas!! Aprovechalas.. para obtener mas seguime en Instagram `}
            {remainingEncryptions !== 100 && (
              <Avatar
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/fede_estrubia/",
                    "_blank"
                  );
                }}
                src="/FotoCarnet2.png"
                size="sm"
                isBordered
                color="success"
                className="flex justify-center items-center ml-2 hover:cursor-pointer"
              />
            )}
          </p>
          <p
            className={`${colors[theme].textAlerta} sm:hidden pl-2 text-[0.8rem] transition-colors duration-500`}
          >
            {remainingEncryptions === 100
              ? `Tienes ${remainingEncryptions} encriptaciones Gratuitas!! Aprovechalas..`
              : `Te quedan ${remainingEncryptions} encriptaciones Gratuitas!!`}
          </p>
        </motion.div>
        {/** BOTONES */}
        <div className="flex flex-col sm:flex-row w-full mt-4 items-center justify-center gap-6 lg:pl-80 lg:pr-24 z-10">
          <motion.button
            onClick={() => {
              encriptador(text, encrypt), decrement();
            }}
            variants={buttonVariants}
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            className={`${colors[theme].bg300} ${colors[theme].textButtonEncriptar} text-[18px] w-full h-[69px] rounded-[24px] transition-colors duration-1000`}
          >
            CREAR <span className="font-bold text-[19px]">ENIGMA</span>
          </motion.button>
          <motion.button
            onClick={() => {
              desencriptador(text, desencrypt), decrement();
            }}
            variants={buttonVariants}
            initial="initial"
            whileInView="inView"
            whileHover="hover"
            className={`bg-transparent border-1 ${colors[theme].border300} ${colors[theme].text300} text-[18px] w-full h-[69px] rounded-[24px] transition-colors duration-1000`}
          >
            REVELAR UN <span className="font-bold text-[19px]">SECRETO</span>
          </motion.button>
        </div>
      </div>

      {/** Div Text Encrypted */}
      {!text && !textDesencrypted && !textEncrypted ? (
        <motion.div
          initial={{ opacity: 0, y: 1200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "spring",
            delay: 0.5,
          }}
          className={`flex flex-col relative justify-center items-center w-full h-[15vh] mb-12 lg:mb-0 mt-12 sm:mt-4 lg:mt-[-5vh] lg:w-[30%] lg:h-[90vh] ${colors[theme].bg200} rounded-[32px] p-2 gap-4 transition-colors duration-500`}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className={`hidden ${colors[theme].textHistory} break-words w-full lg:block lg:w-4/5 lg:h-[10rem] font-regular text-2xl transition-colors duration-500`}
          >
            ¡Hola,{" "}
            <span className={`${colors[theme].textAscent}`}>Aventurero!</span>{" "}
            🕵️‍♂️ <br /> Soy{" "}
            <span className={`${colors[theme].textAscent}`}>Lupín</span> y con
            mi{" "}
            <span className={`${colors[theme].textAscent2}`}>lupa mágica</span>{" "}
            puedo convertir tu{" "}
            <span className={`${colors[theme].textAscent2}`}>mensaje</span> en
            un <span className={`${colors[theme].textAscent}`}>Enigma</span> o{" "}
            <span className={`${colors[theme].textAscent2}`}>revelar su</span>{" "}
            <span className={`${colors[theme].textAscent}`}>Misterio</span>
          </motion.h1>
          <img
            className="w-full object-contain hidden lg:flex lg:mt-8 lg:mb-8"
            src="/munieco.svg"
            alt="Muñeco"
          />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className={`hidden ${colors[theme].textHistory} break-words w-full sm:block lg:w-4/5 lg:h-[12rem] font-regular lg:text-2xl sm:text-[1.4rem] transition-colors duration-500`}
          >
            Escribe tu{" "}
            <span className={`${colors[theme].textAscent2}`}>mensaje</span>{" "}
            <span className={`${colors[theme].textAscent}`}>Secreto</span> y
            déjamelo a mí para{" "}
            <span className={`${colors[theme].textAscent2}`}>convertirlo</span>{" "}
            en un <span className={`${colors[theme].textAscent}`}>enigma</span>{" "}
            o <span className={`${colors[theme].textAscent2}`}>revelar</span> su{" "}
            <span className={`${colors[theme].textAscent}`}>misterio</span>. ¡La
            diversión está a solo un clic de distancia! 😄
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className={`${colors[theme].text300} break-words w-full sm:hidden lg:mt-16 lg:w-3/4 font-bold text-[1.2rem] transition-colors duration-500`}
          >
            Escribe tu texto y deja que lo convierta en un enigma o lo descifre.
          </motion.p>
        </motion.div>
      ) : !textEncrypted && !textDesencrypted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
          className={`flex flex-col justify-center items-center w-full h-[15vh] mb-12 sm:mb-0 mt-12 sm:mt-4 sm:h-[15vh] lg:mt-[-5vh] lg:w-[30%] lg:overflow-hidden lg:h-[90vh] ${colors[theme].bg200} rounded-[32px] p-2 transition-colors duration-500 z-10`}
        >
          <motion.p
            initial={{ opacity: 0, scale: 1, y: 0, x: 400 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              transition: { duration: 2, ease: "easeInOut", type: "spring" },
            }}
            className={`${colors[theme].textHistory} hidden sm:block break-words sm:w-full sm:h-[10rem] font-regular sm:text-[1.4rem]`}
          >
            <span className={`${colors[theme].textAscent}`}>¡Genial!</span>{" "}
            <br /> Ahora decidí si querés <br />{" "}
            <span className={`${colors[theme].textAscent2}`}>transformar</span>{" "}
            tu <span className={`${colors[theme].textAscent2}`}>mensaje</span>{" "}
            <br /> en un{" "}
            <span className={`${colors[theme].textAscent}`}>misterio</span> o{" "}
            <br />{" "}
            <span className={`${colors[theme].textAscent2}`}>revelar</span> su{" "}
            <span className={`${colors[theme].textAscent}`}>secreto</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 1, y: 0, x: 400 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              transition: { duration: 2, ease: "easeInOut", type: "spring" },
            }}
            className={`${colors[theme].textHistory} break-words sm:hidden text-[1.1rem] w-full font-regular`}
          >
            <span className={`${colors[theme].textAscentM}`}>¡Genial!</span>{" "}
            Ahora{" "}
            <span className={`${colors[theme].textAscentM2}`}>decidí</span>
            <br /> si querés{" "}
            <span className={`${colors[theme].textAscentM2}`}>
              transformar
            </span>{" "}
            tu mensaje en un{" "}
            <span className={`${colors[theme].textAscentM}`}>misterio</span> o{" "}
            <span className={`${colors[theme].textAscentM2}`}>revelar</span> su{" "}
            <span className={`${colors[theme].textAscentM}`}>secreto</span>.
          </motion.p>
          <motion.img
            initial={{ opacity: 0, x: 400 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 2, ease: "easeInOut", type: "spring" },
            }}
            className="w-full object-contain hidden lg:block lg:h-2/4 lg:mb-12 lg:mt-3"
            src="/munieco.svg"
            alt="Muñeco"
          />
          <motion.h2
            initial={{ opacity: 0, scale: 1, y: 0, x: 400 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              transition: { duration: 2, ease: "easeInOut", type: "spring" },
            }}
            className={`${colors[theme].textHistory} hidden sm:block break-words text-[0.9rem] lg:w-full lg:h-[10rem] font-regular sm:text-[1.4rem] transition-colors duration-500`}
          >
            <span className={`${colors[theme].textAscent2}`}>Soy</span> un{" "}
            <span className={`${colors[theme].textAscent}`}>Genio</span> en{" "}
            <span className={`${colors[theme].textAscent2}`}>esto,</span> <br />{" "}
            <span className={`${colors[theme].textAscent}`}>¡</span>{" "}
            <span className={`${colors[theme].textAscent2}`}>Vos</span> solo{" "}
            <span className={`${colors[theme].textAscent2}`}>decime</span> qué{" "}
            <span className={`${colors[theme].textAscent2}`}>hacer</span>
            <span className={`${colors[theme].textAscent}`}>!</span>
          </motion.h2>
          {/* <motion.button
            onClick={() => navigator.clipboard.writeText(newText)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeInOut",
              damping: 14,
              type: "spring",
            }}
            className="bg-lBlue300 text-lBlue100 text-[18px] w-full h-[69px] rounded-[24px]"
          >
            Copiar
          </motion.button> */}
        </motion.div>
      ) : !textEncrypted && textDesencrypted ? (
        <div
          className={`flex flex-col justify-between items-center w-full mt-12 mb-12 sm:mb-0 sm:mt-4 sm:h-[25vh] lg:mt-[-5vh] lg:w-[30%] lg:overflow-hidden lg:h-[90vh] ${colors[theme].bg200} rounded-[32px] p-8 transition-colors duration-500 `}
        >
          <p
            className={`${colors[theme].textHistory} break-words w-full lg:block lg:mt-16 lg:w-full text-[1.2rem] sm:text-[1.5rem]`}
          >
            ¡Gran trabajo,{" "}
            <span className={`${colors[theme].textAscent}`}>aventurero!</span>{" "}
            <br /> Este es el{" "}
            <span className={`${colors[theme].textAscent}`}>secreto</span> que{" "}
            <span className={`${colors[theme].textAscent}`}>Lupín</span>{" "}
            <span className={`${colors[theme].textAscent2}`}>reveló</span>{" "}
            especialmente <br /> para{" "}
            <span className={`${colors[theme].textAscent}`}>vos</span>
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            className={`flex justify-center items-center ${colors[theme].msg} border-0 ${colors[theme].border300} shadow-inner shadow-md mt-6 mb-6 p-4 rounded-3xl overflow-hidden max-w-full lg:mt-4 lg:mb-16 lg:p-6 transition-colors duration-500`}
          >
            <p
              className={`${colors[theme].text300} break-words w-full font-bold text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem]`}
            >
              {textDesencrypted.toUpperCase()}
            </p>
          </motion.div>

          <Popover
            isOpen={buttonCopy}
            offset={20}
            placement="top"
            motionProps={{
              variants: {
                initial: {
                  y: "50%",
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  duration: 0.1,
                  transition: {
                    duration: 0.6,
                    type: "spring",
                    ease: "easeInOut",
                  },
                },
                exit: {
                  y: "-20%",
                  opacity: 0,
                  duration: 0,
                  scale: 0.7,
                  transition: {
                    duration: 2,
                    type: "spring",
                    ease: "easeIn",
                  },
                },
              },
            }}
          >
            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: "easeInOut",
                damping: 14,
                type: "spring",
              }}
            >
              <PopoverTrigger>
                <Button
                  onClick={() => {
                    btnCopy(textDesencrypted);
                  }}
                  className={`${colors[theme].bg300} ${colors[theme].text100} text-[18px] w-full h-[69px] rounded-[24px]`}
                >
                  <span className="font-bold">Copiar</span> Secreto Revelado
                </Button>
              </PopoverTrigger>
            </motion.div>
            <PopoverContent className={`${colors[theme].bg300} animate-pulse`}>
              <div
                className={`flex flex-col justify-center items-center overflow-hidden gap-2 p-5`}
              >
                <p
                  className={`text-medium font-bold uppercase ${colors[theme].text100} `}
                >
                  Guarde el{" "}
                  <span className={`${colors[theme].text100}`}>Secreto</span> en
                  tu memoria
                </p>
                <p
                  className={`text-xl font-bold text-center break-words w-[80%] uppercase ${colors[theme].text100}`}
                >
                  {textDesencrypted}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div
          className={`flex flex-col justify-between items-center w-full mb-12 sm:mb-0 mt-12 sm:mt-4 sm:h-[25vh] lg:mt-[-5vh] lg:w-[30%] lg:overflow-hidden lg:h-[90vh] ${colors[theme].bg200} rounded-[32px] p-8 duration-700`}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className={`${colors[theme].textHistory} hidden sm:block break-words w-full lg:block lg:mt-16 lg:w-full font-regular text-[1.2rem] sm:text-[1.5rem]`}
          >
            ¡Gran trabajo,{" "}
            <span className={`${colors[theme].textAscent}`}>Aventurero!</span>{" "}
            <br /> Este es el{" "}
            <span className={`${colors[theme].textAscent}`}>Enigma</span> que{" "}
            <span className={`${colors[theme].textAscent2}`}>Lupín</span> <br />{" "}
            ha <span className={`${colors[theme].textAscent2}`}>creado</span>{" "}
            especialmente <br /> para{" "}
            <span className={`${colors[theme].textAscent}`}>Vos</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            className={`${colors[theme].textHistory} sm:hidden break-words w-full  lg:mt-16 lg:w-full font-regular text-[1.2rem] sm:text-[1.5rem]`}
          >
            ¡Gran trabajo,{" "}
            <span className={`${colors[theme].textAscent}`}>Aventurero!</span>{" "}
            <br /> Este es el{" "}
            <span className={`${colors[theme].textAscent}`}>Enigma</span> que{" "}
            <span className={`${colors[theme].textAscent2}`}>Lupín</span> ha{" "}
            <span className={`${colors[theme].textAscent2}`}>creado</span>{" "}
            especialmente <br /> para{" "}
            <span className={`${colors[theme].textAscent}`}>Vos</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            className={`flex justify-center items-center ${colors[theme].msg} border-0 ${colors[theme].border300} shadow-inner shadow-md mt-6 mb-6 p-4 rounded-3xl overflow-hidden max-w-full lg:mt-4 lg:mb-16 lg:p-6`}
          >
            <p
              className={`${colors[theme].text300} break-words w-full font-bold text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem]`}
            >
              {textEncrypted.toUpperCase()}
            </p>
          </motion.div>
          <Popover
            isOpen={buttonCopy}
            offset={20}
            placement="top"
            motionProps={{
              variants: {
                initial: {
                  y: "50%",
                  opacity: 0,
                },
                enter: {
                  y: 0,
                  opacity: 1,
                  duration: 0.1,
                  transition: {
                    duration: 0.6,
                    type: "spring",
                    ease: "easeInOut",
                  },
                },
                exit: {
                  y: "-20%",
                  opacity: 0,
                  duration: 0,
                  scale: 0.7,
                  transition: {
                    duration: 2,
                    type: "spring",
                    ease: "easeIn",
                  },
                },
              },
            }}
          >
            <motion.div
              className="w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0,
                ease: "easeInOut",
                damping: 14,
                type: "spring",
              }}
            >
              <PopoverTrigger>
                <Button
                  onClick={() => {
                    btnCopy(textEncrypted);
                  }}
                  className={`${colors[theme].bg300} ${colors[theme].text100} text-[18px] w-full h-[69px] rounded-[24px]`}
                >
                  <span className="font-bold">Copiar</span> Enigma
                </Button>
              </PopoverTrigger>
            </motion.div>
            <PopoverContent className={`${colors[theme].bg300} animate-pulse`}>
              <div
                className={`flex flex-col justify-center items-center overflow-hidden gap-2 p-5`}
              >
                <p
                  className={`text-medium font-bold uppercase ${colors[theme].text100} `}
                >
                  Guarde el{" "}
                  <span className={`${colors[theme].text100}`}>Enigma</span> en
                  tu memoria
                </p>
                <p
                  className={`text-xl font-bold text-center break-words w-[80%] uppercase ${colors[theme].text100}`}
                >
                  {textEncrypted}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
      <div className="overflow-hidden">
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 3.5,
            type: "spring",
            ease: "easeInOut",
          }}
          className="flex fixed bottom-0 left-0  justify-center w-screen border-[#00bbf090] z-30"
        >
          <div
            className={`flex justify-center items-center pt-2 pb-2 border-t-1 border-${colors[theme].c300} ${colors[theme].bg200} rounded-t-full w-screen gap-1 z-20`}
          >
            <p
              className={`${colors[theme].textHistory} text-base font-regular`}
            >
              Desarrollado por&nbsp;
            </p>

            <motion.p
              whileHover={{ scale: 0.98 }}
              className="cursor-pointer text-[#08f] text-lg font-semibold"
            >
              CodeMax
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
