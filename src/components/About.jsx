import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";
import { Element } from "react-scroll";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color += "1a";
  return color;
}

const About = () => (
  <Box
    sx={{
      width: "100vw",
      minHeight: "100vh",
      bgcolor: "#181C1F",
      py: 6,
      px: { xs: 1, sm: 3, md: 6 },
      boxSizing: "border-box",
      display: "flex",
      flexDirection: { xs: "column", lg: "row" }, // stacks on xs, row on large screens
      gap: 4,
      justifyContent: "center",
    }}
  >
    {/* About Section */}
    <Box
      sx={{
        flexBasis: "65%",
        maxWidth: "65%",
        backgroundColor: "#242B2E",
        borderRadius: "25px",
        color: "#FFFFFF",
        boxShadow: 4,
        p: { xs: 2, sm: 4 },
        minHeight: 600,
        overflowY: "auto",
      }}
    >
      <Element name="About">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 3,
            color: "#FFD700",
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: "comic neue, sans-serif",
          }}
        >
          About
        </Typography>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            overflow: "auto",
            bgcolor: "#758283",
            borderRadius: "20px",
            color: "#d3d3d3",
            px: 0,
            py: 3,
            mb: 2,
            background: `radial-gradient(${getRandomColor()} 3px, transparent 4px), radial-gradient(${getRandomColor()} 3px, transparent 4px), linear-gradient(#000 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, ${getRandomColor()} 75px, ${getRandomColor()} 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, ${getRandomColor()} 76px, ${getRandomColor()} 77px, transparent 78px, transparent 109px), #000`,
            backgroundSize:
              "109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px",
            backgroundPosition: "54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
            "&::-webkit-scrollbar": { width: "0.6em" },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              backgroundColor: "#CAD5E2",
              borderRadius: "25px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#758283",
              borderRadius: "25px",
            },
          }}
        >
          <Accordion
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ffffff1f",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#f0e68c",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#ffffff1f",
              }}
            >
              <Typography
                sx={{
                  color: "#f0e68c",
                  fontFamily: "comic neue",
                }}
              >
                Background
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textAlign: "justify",
                  fontSize: "1rem",
                  fontFamily: "comic neue",
                }}
              >
                <p>
                  Deep learning has emerged as a powerful tool in artificial
                  intelligence, thanks to advancements in data science and
                  computing power, such as the widespread use of GPUs and TPUs.
                  Its applications are vast, including Automation, Robotics,
                  Natural Language Processing, Computer Vision, Speech
                  Recognition, Object Detection, Remote Sensing, Language
                  Modeling, and Drug Discovery. Deep learning has achieved
                  remarkable feats, surpassing world champions in various games
                  and becoming a highly sought-after skill in the industry. By
                  utilizing deep neural network architectures with multiple
                  layers, it enables data representation with increasing
                  abstraction and can be applied to different learning
                  scenarios, such as supervised, unsupervised, and reinforcement
                  learning.
                </p>
                <p>
                  The Workshop on Advances in Deep Learning and Applications
                  (WADLA) was established in 2021. It features a committee of
                  deep learning experts responsible for overseeing the
                  workshop's activities and finalizing the program schedule.
                  WADLA 1.0, held from February 22nd to 26th, 2021, attracted 64
                  participants, including faculties, Ms/PhD students, and
                  researchers from esteemed institutions like IITs, IIITs, NITs,
                  and other premier organizations. The workshop featured 20
                  speakers, including 10 from academia and 6 from industry, with
                  2 international speakers from Germany and Taiwan.
                </p>
                <p>
                  Building on the success of WADLA 1.0, WADLA 2.0 took place
                  from February 21st to 25th, 2022. This highly successful
                  workshop aimed to draw researchers, educators, and industry
                  professionals interested in deep learning. Dr. Manish Gupta,
                  Director of Google Research India, inaugurated the event, and
                  Shri Vishnu Chandra, Group Head of the National Informatics
                  Center of the Government of India, delivered the closing
                  address. With 37 speakers, including IIT faculties, industry
                  experts, and government officials, the workshop provided a
                  solid foundation in the fundamentals and advancements of deep
                  learning, showcasing practical applications across various
                  domains. The event fostered interactions between academia and
                  industry, offering participants the chance to demonstrate deep
                  learning capabilities through industry-led hands-on sessions.
                  Attendees included researchers and faculties from around the
                  world, as well as renowned Indian institutions like IITs,
                  NITs, IIITs, IISERs, and central and state universities.
                  Sponsored by DST, the workshop received an overwhelming
                  response, attracting 113 participants.
                </p>
                <p>
                  Following the success of WADLA 2.0, WADLA 3.0 was scheduled
                  from December 11th to 16th, 2023, and inaugurated with
                  esteemed guests and participants. Led by Prof. Ashutosh Singh,
                  Director of IIIT Bhopal, and Shri M. Balasubramaniam, CEO of
                  StratInfinity Inc., the event aimed to foster collaboration
                  between academia and industry in the realm of deep learning.
                  Established in 2021, WADLA aims to provide quality content and
                  promote interactions between academia and industry. Its latest
                  iteration, WADLA 3.0, continued this mission by offering
                  practical sessions to enhance understanding of deep learning
                  fundamentals and advancements. The workshop served as a
                  platform for industry experts to showcase deep learning models
                  through hands-on sessions. WADLA 3.0 targeted research
                  students, faculty members, educators, and industry experts,
                  offering insights applicable to their studies, exercises, and
                  professional endeavors. Topics such as Large Language Models
                  (LLM), Generative AI, and ChatGPT were selected based on
                  industry demands, with the overarching goal of leveraging
                  cutting-edge deep learning methods for success. This year's
                  workshop boasted 52 sessions featuring 39 distinguished
                  speakers from renowned institutions worldwide, including IITs,
                  NITs, IIITs, and leading industry players like Microsoft,
                  Google, Intel, LinkedIn, Nvidia, Amazon, ISRO, Adobe, Meesho,
                  Samsung, and 24/7 AI. The event garnered significant interest,
                  with 130 participants, including researchers and faculty
                  members from prestigious institutes. Overall, WADLA 3.0
                  promised to be a valuable platform for knowledge exchange and
                  collaboration in the rapidly evolving field of deep learning,
                  bridging the gap between academia and industry to drive
                  innovation and progress.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ffffff1f",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#f0e68c",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#ffffff1f",
              }}
            >
              <Typography
                sx={{
                  color: "#f0e68c",
                  fontFamily: "comic neue",
                }}
              >
                About WADLA 4.0
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textAlign: "justify",
                  fontSize: "1rem",
                  fontFamily: "comic neue",
                }}
              >
                <p>
                  <strong>
                    About WADLA 4.0: Empowering the Future of Deep Learning
                  </strong>
                </p>
                <p>
                  WADLA (Workshop on Advances in Deep Learning and Applications)
                  is a flagship international event committed to bridging
                  cutting-edge deep learning research with practical real-world
                  applications. Since its inception, WADLA has brought together
                  academic researchers, industry professionals, and aspiring
                  learners to explore and advance the frontiers of AI.
                </p>
                <p>
                  <strong>📅 Save the Date: December 15-19, 2025</strong>
                </p>
                <p>
                  Building on the success of previous editions, WADLA 4.0 offers
                  an immersive and transformative experience for students,
                  researchers, educators, and industry professionals.
                </p>
                <p>
                  <strong>🔍 What to Expect</strong>
                </p>
                <p>
                  <strong>🚀 Cutting-Edge Content:</strong> Explore the latest
                  in deep learning including advanced neural architectures,
                  domain adaptation, multimodal learning, scalable AI systems,
                  and real-world deployments.
                </p>
                <p>
                  <strong>🎓 Expertly Curated Program:</strong> Designed by a
                  global technical committee, WADLA 4.0 features talks on
                  emerging technologies, ethical AI, interpretability, and
                  applications across healthcare, agriculture, robotics, and
                  finance.
                </p>
                <p>
                  <strong>🧠 Hands-On Training:</strong> Participate in labs and
                  tutorials covering computer vision, large language models
                  (LLMs), NLP, generative models, reinforcement learning, and
                  quantum computing—bridging theory and practice.
                </p>
                <p>
                  <strong>💡 Hackathon: AI for Real-World Impact:</strong> Take
                  part in an exciting hackathon challenge where you can apply AI
                  to solve real-world problems. Top teams will receive
                  certificates, awards, and mentoring.
                </p>
                <p>
                  <strong>📄 Call for Research Papers:</strong> Submit original
                  research to present in technical sessions and for potential
                  inclusion in post-conference proceedings or journals.
                </p>
                <p>
                  <strong>🌟 Why Attend</strong>
                </p>
                <ul>
                  <li>
                    ✅ Stay Ahead: Learn from AI pioneers and stay updated on
                    fast-evolving trends.
                  </li>
                  <li>
                    🤝 Network: Connect with researchers, startups, and tech
                    leaders.
                  </li>
                  <li>
                    🧠 Upskill: Gain practical, in-demand skills to accelerate
                    your career.
                  </li>
                  <li>
                    🌍 Make an Impact: Apply your ideas to real-world challenges
                    through the hackathon and discussions.
                  </li>
                </ul>
                <p>
                  <strong>🏆 Previous Editions at a Glance:</strong> 1000+
                  participants worldwide, keynotes by top researchers, and
                  hands-on sessions on TensorFlow, PyTorch, and real-world AI
                  applications.
                </p>
                <p>
                  <strong>🔗 Join Us:</strong> Be part of WADLA 4.0 as we unlock
                  the potential of deep learning and shape the future of
                  intelligent systems. Stay tuned for program updates,
                  registrations, paper submissions, and hackathon details on the
                  official website.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ color: "#FFFFFF", backgroundColor: "#ffffff1f" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#f0e68c" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#ffffff1f" }}
            >
              <Typography sx={{ color: "#f0e68c", fontFamily: "comic neue" }}>
                Topics to be Covered – WADLA 4.0
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textAlign: "justify",
                  fontSize: "1rem",
                  fontFamily: "comic neue",
                }}
              >
                <ul>
                  <li>
                    <Typography>
                      Topics already covered in deep learning summer school:
                    </Typography>
                    <br />
                    <b>1. Pre-Deep Learning Essentials</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Python Installation by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=i4CnYnQDaNs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Introduction to Python by Dr. Ravi Ranjan Karn,
                        Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=wq-DMPXItYk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Data Types in Python by Dr. Ravi Ranjan Karn, Accenture
                        –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=JShqKCGyEFE"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Operators in Python by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=doQDDRQF634"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Control Flow in Python by Dr. Ravi Ranjan Karn,
                        Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=QBy6AFpQe4s"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Functions in Python by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=7ihGQEd2B98"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Python Libraries for Deep Learning by Dr. Ravi Ranjan
                        Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=Sy_ptICzoo4"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Numpy by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=dzbfuKaJHeo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Pandas by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=dzbfuKaJHeo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Classes in Python by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=dzbfuKaJHeo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>2. Foundations of Deep Learning</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Introduction to AI, Machine Learning, and Deep Learning
                        by Prof. Aparajita Ojha, PDPM IIITDM Jabalpur –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=gEL5qo9c7xs&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=3"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1xfvXEhlxlIZDyQZTz8ZkunJb_uIMMROk/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Setting Up the Environment: Maths by Dr. Rakesh K
                        Sanodiya, PDPM IIITDM –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=2KT5cZWTAII&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=4"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1Lv-aGEGSr6BtaHvSd6DR_Zpt6eau7arz/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Mathematics for Deep Learning: Linear Algebra, Calculus,
                        and Probability, Neural Networks Basics by Prof.
                        Sumantra Dutta Roy, IIT Delhi –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=iZmgSICL37I&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=5"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1DDG7LrNkhpsbyDOEOTG1caV_iDiZGs1_/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Python for Deep Learning: NumPy, Introduction to
                        Autograd (Automatic Differentiation) by Dr. Rakesh K
                        Sanodiya, PDPM IIITDM –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=ZxSMZ8LVUKE&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=6"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1ilfnTQcPf7UcgcLBT8EdbPYgC2n7HyUG/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Neural Networks Basics: Perceptrons, activation
                        functions, Forward and backward propagation by Prof.
                        Sumantra Dutta Roy, IIT Delhi –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=iZmgSICL37I&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=5"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Building a Simple Neural Network: Implementing a
                        perceptron from scratch by Dr. Samir Jain, alfaTKG –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=OXgn6m41T6k&list=PLg-1QtUkfJ9bSuizWDaUdYfc5Lh2C_HCA&index=7"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Training Neural Networks: Loss functions and gradient
                        descent, Optimization algorithms (SGD, Adam, RMSProp) by
                        Dr. Shiv Ram Dubey, IIIT Allahabad –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/3O_RMQAaKhY"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1AM9yn07j64UUEegYToOIF13-CJ5zYeSi/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Deep Learning Frameworks: TensorFlow vs. PyTorch,
                        Overview of Keras, Building and training a simple model
                        by Dr. Chandra Sekhar Vorugunti, Samsung –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/Nc1NiikYeQ0"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>3. Core Deep Learning Architectures</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Convolutional Neural Networks (CNNs): Basics of CNNs
                        (convolution, pooling, filters) by Dr. Shivram Dubey,
                        IIITA –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/Osfi0I8_gUw"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1xsLCJ5L9Ea36MDLQeBQCIcJmgUyMJZlw/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Building a CNN: Image classification using CIFAR-10 by
                        Dr. Poornima Singh Thakur, ABV IIITM Gwalior –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/HWtteY1Y_6c"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Advanced CNNs: Transfer learning and pre-trained models
                        (ResNet, VGG) by Dr. Rama Krishna Gorthi, IIT Tirupati –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/TKz-QPUjhb0"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1KKoIz_kz0rbWifnCT-K6weq8f7llEmyc/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Transfer Learning with CNNs: Fine-tuning a pre-trained
                        model by Dr. Rakesh K Sanodiya, PDPM IIITDM Jabalpur –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/3A2x2P7kF_g"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1O1-yeFmXsm7BoGR8Fy1JZEjz8778Rfc8/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Recurrent Neural Networks (RNNs) and its Applications in
                        NLP: Basics of RNNs, LSTMs, and GRUs by Dr. Arijit
                        Mondal, IIT Patna –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/0surXWs_Ibc"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/drive/folders/1iQHCdmKU7ZRA47xyJmAh2ikKKcMjp6NH"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Self-attention and Transformer models by Miss. Niharika
                        Ahuja, GOOGLE –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/PVOmD9O-GFk"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://docs.google.com/presentation/d/1SrM1ytxQM2HKXKT7kKp1_HLg3CHCkUrH/edit?slide=id.p1#slide=id.p1"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Implementing Transformers: Text summarization or
                        translation by Dr. Chandra Sekhar Vorugunti, Samsung –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/4nFw81tW1NM"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Unsupervised Learning and Generative Modeling:
                        Autoencoders, Variational Autoencoder by Dr. Jignesh S.
                        Bhatt, IIITV –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/GdE5SVeF-Y0"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1Tx-Z9oeq4ulkI1rw6JiJgEC-JHOcKXo4/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Building an autoencoder for (1) representation learning
                        (2) image denoising by Dr. Jignesh S. Bhatt, IIITV –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/hTG-xMJPGgU"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/drive/folders/1BM4S3Swi7VVsCeHUyBGYJOEmK6kJ2RfD"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Large Language Models (LLMs): Transformer architectures
                        (GPT, BERT, LLaMA), RLHF (Reinforcement Learning from
                        Human Feedback) by Mr. Rushendra Sidibomma, ML Research
                        Engineer, AutomationEdge Technologies –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/SfBHTOyfc2A"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://docs.google.com/presentation/d/1d4tC1wdquzIRvf0-EfX7rh3lkUVievOE/edit?slide=id.p1#slide=id.p1"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Hands-on with LLMs: Fine-tuning a pre-trained LLM,
                        Experimenting with prompt engineering by Mr. Rushendra
                        Sidibomma, ML Research Engineer, AutomationEdge
                        Technologies –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/RzJ5Lwp3I2w"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1YuCLJuYfAiT5HZbYi_8Xq1AkDl0Yp-ib/view"
                        >
                          PPT
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <br />
                    <b>4. Exploration of Advanced Topics in Deep Learning</b>
                    <br /> <br />
                    <ul>
                      <li>
                        Introduction to Generative Adversarial Network by Dr.
                        Rakesh Kumar Sanodiya –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/watch?v=bCpJPiOujoc"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1v9NP03QuYZriRBYmmw8j-LeYZptt6Aas/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Training a GAN for Data Augmentation by Ms. Shubhangi
                        Chaturvedi, ABV IIITM Gwalior –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/gpEg_5ElPpA"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Diffusion Models: Introduction to diffusion models,
                        Denoising Diffusion Probabilistic Models (DDPMs),
                        Text-to-image models by Prof. Aparajita Ojha –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/lYO_Qzp0Sdc"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1V2I2Nz7UM8rq6jIn8tUovvBFvNUnUgxT/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Hands-on Diffusion Models: Implementing Stable Diffusion
                        for image generation by Dr. Chandra Sekhar, Samsung –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/Q-QcTg8VAi0"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/drive/folders/15P0mummd3xIFyt59j1nU66fcTggOhUPN"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Visualizing Model Decisions: Using tools like SHAP or
                        LIME by Prof. R. Konda Reddy, IIT Hyderabad –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/PX63wme23pM"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/12Y8oZLaiYlG01PNRJymD3loF0teanIZq/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Explainable AI (XAI): Interpretability in deep learning,
                        Techniques for model explainability by Prof. R. Konda
                        Reddy, IIT Hyderabad –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/giMo_PwpYgA"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1W9UniF0RE7-oTGbifANDkS4kACBnXu4e/view"
                        >
                          PPT
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://example.com/code1"
                        >
                          Code Link 1
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://example.com/code2"
                        >
                          Code Link 2
                        </a>
                      </li>
                      <li>
                        Reinforcement Learning (RL): Basics of RL and Deep
                        Q-Learning, Introduction to Multi-Agent RL by Dr. Madan
                        Mohan Vasu (AOjha) –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/tRPF56Td-vg"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <br />
                    <b>5. Capstone Projects & Real-World Applications</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Capstone Project Kickoff: Participants select project
                        themes (Computer Vision, NLP, Healthcare, Remote
                        Sensing) by Prof. Aparajita Ojha, IIITDMJ –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/ImWpXYgAYPA"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1VxEKgtAYOS5mIjh7qYItpSNRop8aest2/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Project Ideation & Dataset Selection: Defining the
                        problem statement, Choosing datasets and evaluation
                        metrics by Dr. Ravi Ranjan Karn, Accenture –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/2yJGi1yR0s4"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://docs.google.com/document/d/10irvIoAmdvrLWrv3ZVY2FNSPvySs3EZa/edit?tab=t.0"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Computer Vision Applications: Image segmentation and
                        classification by Mr. Prantik Sen, Amazon –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/_v4vYeS3ZLQ"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1kPiwQ7eNyXOmG2vUz2rQ8NH1GwUb1Z5G/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        AI in Remote Sensing: Using Domain Adaptation and
                        Transfer Learning models by Dr. Rakesh Kumar Sanodiya –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/B6tWsaIFhUg"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        AI in Healthcare: Medical imaging and predictive
                        analytics by Dr. Subramanya Gorthi, IIT Tirupati & Prof.
                        Tanveer, IIT Indore –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/HhKJjS-bFEI"
                        >
                          YouTube
                        </a>
                        ,{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://drive.google.com/file/d/1kPiwQ7eNyXOmG2vUz2rQ8NH1GwUb1Z5G/view"
                        >
                          PPT
                        </a>
                      </li>
                      <li>
                        Security Applications by Dr. Emmanuel Pilli, MNIT Jaipur
                        –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/wDW7-Dek5T4"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        NLP Applications: Chatbots and machine translation by
                        Dr. Sriparna Saha, IIT Patna –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/-vDhU6BjTuc"
                        >
                          YouTube
                        </a>
                      </li>
                      <li>
                        Capstone Project Presentations: Industry mentors and
                        researchers provide feedback –{" "}
                        <a
                          style={{ color: "#f0e68c" }}
                          href="https://www.youtube.com/live/_RRVIJaxLXY"
                        >
                          YouTube
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <Typography>Topics covering in WADLA 4.0:</Typography>
                    <br />
                    <b>6. Fundamentals Revisited & Research Horizons</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        The Evolution of Deep Learning: Research Perspectives
                        and Open Challenges
                      </li>
                      <li>
                        Foundations of Deep Learning: Mathematics, Optimization
                        & Physics-Inspired Models
                      </li>
                      <li>
                        Advancements in Neural Architectures: CNNs, RNNs,
                        Transformers
                      </li>
                      <li>
                        Hands-on Tutorial – Getting Started with PyTorch for
                        Research Applications
                      </li>
                      <li>
                        Interactive Discussion – Participants’ Research
                        Interests & Collaboration Opportunities
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>
                      7. Advanced Architectures, Transfer Learning & Foundation
                      Models
                    </b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Transfer Learning & Domain Adaptation: Techniques,
                        Applications & Challenges
                      </li>
                      <li>
                        Foundation Models and Transformer Architectures: BERT,
                        GPT, LLaMA & Beyond
                      </li>
                      <li>
                        Hands-on Tutorial – Fine-tuning Pretrained Models for
                        NLP & Vision Tasks
                      </li>
                      <li>
                        The Generative AI Revolution: Impacts, Challenges &
                        Future Trends
                      </li>
                      <li>
                        Image/Video Generation: A survey in the realm of
                        Efficiency
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>
                      8. Deep Learning for Healthcare & Biomedical Application
                    </b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Transforming Healthcare with Deep Learning: From
                        Diagnosis to Drug Discovery
                      </li>
                      <li>
                        DL for Medical Imaging: Radiology, Pathology & Image
                        Reconstruction
                      </li>
                      <li>
                        Hands-on Tutorial – MRI/X-ray Image Classification with
                        CNNs
                      </li>
                      <li>
                        AI-Powered Clinical Decision Support Systems: Research
                        Challenges
                      </li>
                      <li>
                        Deep Learning Solutions for Medical Diagnostics:
                        Genomics and Other Data Types
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>
                      9. DL in Defence, Cybersecurity, Environment & Research
                      Showcase
                    </b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        AI & Deep Learning for National Security and Defence
                        Applications (e.g., autonomous surveillance, strategic
                        simulations, sensor fusion, battlefield decision
                        systems)
                      </li>
                      <li>
                        DL for Environmental Monitoring, Climate Modelling &
                        Disaster Management
                      </li>
                      <li>
                        DL in Defence: Target Recognition, Surveillance & Drone
                        Intelligence
                      </li>
                      <li>
                        DL in Cybersecurity: Intrusion Detection, Threat
                        Intelligence & Fraud Analytics
                      </li>
                      <li>
                        DL for Sustainable Agriculture: Crop Monitoring & Yield
                        Forecasting
                      </li>
                    </ul>
                  </li>
                  <li>
                    <br />
                    <b>10. Collaborative Projects & Inauguration Hackathon</b>
                    <br />
                    <br />
                    <ul>
                      <li>
                        Collaborative Research Idea Pitch (Participants form
                        thematic groups)
                      </li>
                      <li>
                        Mentored Group Discussions – Mini Proposal Writing
                      </li>
                      <li>Group Presentations – Short Research Proposals</li>
                      <li>
                        Hackathon Inauguration – Problem Statements Released
                      </li>
                    </ul>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ffffff1f",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#f0e68c",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#ffffff1f",
              }}
            >
              <Typography
                sx={{
                  color: "#f0e68c",
                  fontFamily: "comic neue",
                }}
              >
                Intended Participants
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textAlign: "justify",
                  fontSize: "1rem",
                  fontFamily: "comic neue",
                }}
              >
                <p>
                  WADLA 4.0 aims to cater to the needs and interests of various
                  participants, including:
                </p>
                <ul>
                  <li>
                    <br />
                    Students & Researchers aspiring to build expertise in AI &
                    Deep Learning
                  </li>
                  <li>
                    Faculty & Academicians looking to integrate deep learning
                    into their teaching
                  </li>
                  <li>
                    Industry Professionals keen on leveraging AI for business
                    applications
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#ffffff1f",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#f0e68c",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#ffffff1f",
              }}
            >
              <Typography
                sx={{
                  color: "#f0e68c",
                  fontFamily: "comic neue",
                }}
              >
                Goal of the workshop
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textAlign: "justify",
                  fontSize: "1rem",
                  fontFamily: "comic neue",
                }}
              >
                <p>The workshop aims to:</p>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Foundation Building
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Understand key concepts and algorithms as a solid base for
                      deep learning exploration.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Advanced Techniques
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Dive into cutting-edge advancements such as transformer
                      architectures and reinforcement learning.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Practical Applications
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      {" "}
                      Apply deep learning to real-world problems in various
                      sectors like healthcare and natural language processing.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Hands-on Experience
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Gain practical skills through hands-on sessions with
                      frameworks and tools.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Industry-Academia Interactions:
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Foster collaboration between academia and industry through
                      sessions and discussions.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Trends and Research Directions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Explore the latest trends and future directions in deep
                      learning research.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Networking Opportunities
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Connect with peers and experts for potential
                      collaborations and career growth.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Personalized Learning Paths
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Tailor learning to individual backgrounds and needs
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Access to Resources
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Get exclusive materials for continued learning beyond the
                      workshop.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Certification
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Receive certification upon completion, enhancing
                      professional profiles.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Mentorship and Guidance
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Receive guidance from leading experts in navigating
                      complex topics.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Interactive Sessions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Participate in Q&A panels and group discussions for deeper
                      engagement.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#ffffff1f",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#f0e68c",
                        }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#ffffff1f",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EF5354",
                        fontFamily: "comic neue",
                      }}
                    >
                      Real-World Problem Solving
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        textAlign: "justify",
                        fontSize: "1rem",
                        fontFamily: "comic neue",
                      }}
                    >
                      Apply learned concepts to real-world projects, enhancing
                      problem-solving skills.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Element>
    </Box>

    {/* Right side panel containing News & Updates and Archive */}
    <Box
      sx={{
        flexBasis: "35%",
        maxWidth: "35%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* News & Updates Section */}
      <Box
        sx={{
          background: "#242B2E",
          borderRadius: "25px",
          boxShadow: 3,
          p: 3,
          color: "#fff",
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: 700, mb: 2 }}
        >
          News & Updates
        </Typography>
        <List>
          <ListItem
            alignItems="flex-start"
            sx={{ mb: 2, px: 0 }}
            borderColor="#333"
            borderBottom={1}
          >
            <ListItemText
              primary={
                <Typography sx={{ color: "#FFD700", fontWeight: 600 }}>
                  Broucher Released for WADLA 4.0 !!!
                </Typography>
              }
              secondary={
                <Typography sx={{ color: "#fff" }}>
                  Click here to download the Broucher.{" "}
                  <a
                    href="https://drive.google.com/file/d/1cvUORxXY4Qr2K4L8Tvw5qnqTqU4GIco5/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#90caf9", textDecoration: "underline" }}
                  >
                    Download Broucher
                  </a>
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            alignItems="flex-start"
            sx={{ mb: 2, px: 0 }}
            borderColor="#333"
            borderBottom={1}
          >
            <ListItemText
              primary={
                <Typography sx={{ color: "#FFD700", fontWeight: 600 }}>
                  Call for Papers Released !!!
                </Typography>
              }
              secondary={
                <Typography sx={{ color: "#fff" }}>
                  Click here to view.{" "}
                  <a
                    href="https://drive.google.com/file/d/1M1IlVL8PdD_nGhMxmCHguHQy51YVBK25/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#90caf9", textDecoration: "underline" }}
                  >
                    View file
                  </a>
                </Typography>
              }
            />
          </ListItem>
          {/* Additional news items */}
        </List>
      </Box>

      {/* Archive Section */}
      <Box
        sx={{
          backgroundColor: "#242B2E",
          color: "#FFFFFF",
          borderRadius: "25px",
          boxShadow: 4,
          p: { xs: 2, sm: 4 },
          maxHeight: 400,
          overflowY: "auto",
        }}
      >
        <Element name="Archive">
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: "#FFD700",
              fontWeight: 700,
              fontFamily: "comic neue, sans-serif",
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            Archive
          </Typography>
        </Element>
        <Box sx={{ width: "100%", mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#f9adc0", mb: 1 }}>
            <a
              style={{ color: "#f0e68c" }}
              href="https://third.wadla.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#f9adc0" }}
            >
              Wadla 3.0 - 2023 <LaunchIcon fontSize="small" />
            </a>
          </Typography>
          <Box
            sx={{
              maxHeight: 120,
              overflowY: "auto",
              px: 1,
              "&::-webkit-scrollbar": { width: ".6em" },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#CAD5E2",
                borderRadius: "25px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#758283",
                borderRadius: "25px",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "0.95rem",
                color: "#d3d3d3",
              }}
            >
              WADLA 3.0 was scheduled from December 11th to 16th, 2023, and
              inaugurated with esteemed guests and participants. Led by Prof.
              Ashutosh Singh, Director of IIIT Bhopal, and Shri M.
              Balasubramaniam, CEO of StratInfinity Inc., the event aimed to
              foster collaboration between academia and industry in the realm of
              deep learning. Established in 2021, WADLA aims to provide quality
              content and promote interactions between academia and industry.
              Its latest iteration, WADLA 3.0, continued this mission by
              offering practical sessions to enhance understanding of deep
              learning fundamentals and advancements. The workshop served as a
              platform for industry experts to showcase deep learning models
              through hands-on sessions. WADLA 3.0 targeted research students,
              faculty members, educators, and industry experts, offering
              insights applicable to their studies, exercises, and professional
              endeavors. Topics such as Large Language Models (LLM), Generative
              AI, and ChatGPT were selected based on industry demands, with the
              overarching goal of leveraging cutting-edge deep learning methods
              for success. This year's workshop boasted 52 sessions featuring 39
              distinguished speakers from renowned institutions worldwide,
              including IITs, NITs, IIITs, and leading industry players like
              Microsoft, Google, Intel, LinkedIn, Nvidia, Amazon, ISRO, Adobe,
              Meesho, Samsung, and 24/7 AI. The event garnered significant
              interest, with 130 participants, including researchers and faculty
              members from prestigious institutes. Overall, WADLA 3.0 promised
              to be a valuable platform for knowledge exchange and collaboration
              in the rapidly evolving field of deep learning, bridging the gap
              between academia and industry to drive innovation and progress.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", mb: 3 }}>
          <Typography variant="h6" sx={{ color: "#f9adc0", mb: 1 }}>
            <a
              style={{ color: "#f0e68c" }}
              href="https://second.wadla.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#f9adc0" }}
            >
              Wadla 2.0 - 2022 <LaunchIcon fontSize="small" />
            </a>
          </Typography>
          <Box
            sx={{
              maxHeight: 120,
              overflowY: "auto",
              px: 1,
              "&::-webkit-scrollbar": { width: ".6em" },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#CAD5E2",
                borderRadius: "25px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#758283",
                borderRadius: "25px",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "0.95rem",
                color: "#d3d3d3",
              }}
            >
              WADLA 2.0 was a highly successful workshop aimed at researchers,
              educators, and industry professionals interested in deep learning.
              The event was inaugurated by Dr. Manish Gupta, Director of Google
              Research India, and valedicted by Shri Vishnu Chandra, Group Head
              of the National Informatics Center of the Government of India. The
              workshop provided a strong foundation in the basics and
              advancements of deep learning, with practical applications across
              various domains. The workshop also facilitated academia-industry
              interactions through the participation of leaders from diverse
              fields and included industry-led hands-on sessions for
              participants to demonstrate deep learning capabilities. 37
              speakers, including 15 IIT faculties, 13 industry experts, 2 from
              the Government of India, and 7 international speakers, were
              present at the event. Researchers and faculties from around the
              world, including the UK, Israel, South Korea, Mexico, Denmark,
              Morocco, and Sudan, as well as from IITs, NITs, IIITs, IISERs, and
              central and state universities, participated in the workshop. The
              event was sponsored by DST and received an overwhelming response
              with 113 participants in attendance.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ color: "#f9adc0", mb: 1 }}>
            <a
              style={{ color: "#f0e68c" }}
              href="https://sites.google.com/view/wadla2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#f9adc0" }}
            >
              Wadla 1.0 - 2021 <LaunchIcon fontSize="small" />
            </a>
          </Typography>
          <Box
            sx={{
              maxHeight: 80,
              overflowY: "auto",
              px: 1,
              "&::-webkit-scrollbar": { width: ".6em" },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#CAD5E2",
                borderRadius: "25px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#758283",
                borderRadius: "25px",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: "0.95rem",
                color: "#d3d3d3",
              }}
            >
              The WADLA - 2021 workshop had 64 participants. These included
              faculties, Ms/PhD students and other researchers. All the
              participants were from premier institutions such as IITs, IIITs,
              NITs and other premier institutions. Importantly, there were 20
              speakers, of which 16 speakers were invited from outside IIIT Sri
              City. Of these 16 speakers, 10 of them were from academia while 6
              were from industry. Notably, there were 2 speakers from Germany
              and Taiwan. The workshop was held over 5 days; from 22 - 26 Feb
              2021.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default About;
