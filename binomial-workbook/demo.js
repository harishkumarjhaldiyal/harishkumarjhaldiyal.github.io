/* Public demo: original teaching content, fictional data, no school services. */
(()=>{
const CONFIG={TITLE:'The Binomial Theorem',COURSE:'IB DP Mathematics: Analysis and Approaches SL',AUTHOR:'Mr. Harish Kumar',CLASSES:['11 AA SL'],TRIES_BEFORE_SOLUTION:3,ACTIVE_MINUTES:10};
const SECTIONS = [
  {
    id: 'pascal',
    title: 'Pascal\'s triangle and nCr',
    short: 'Pascal and nCr',
    intro: String.raw`<p>Each number in Pascal's triangle is the sum of the two numbers above it. Row $n$ gives the coefficients of $(a+b)^n$, where the top 1 is row $0$.</p>
<ul><li>$\binom{n}{r}=\dfrac{n!}{r!\,(n-r)!}$, where $n!=n\times(n-1)\times\dots\times2\times1$ and $0!=1$. It is also written $^{n}C_{r}$.</li>
<li>$\binom{n}{r}$ is entry $r$ of row $n$, counting from $r=0$.</li>
<li>Symmetry: $\binom{n}{r}=\binom{n}{n-r}$.</li>
<li>TI-Nspire CX II: in the Calculator app, menu 5:3 Combinations gives nCr( ), or type nCr(10,4).</li></ul>`,
    explorer: 'pascal'
  },
  {
    id: 'expand',
    title: 'Expanding (a + b)ⁿ',
    short: 'Expanding',
    intro: String.raw`$$\begin{aligned}(a+b)^n&=a^n+\binom{n}{1}a^{n-1}b\\&\quad+\binom{n}{2}a^{n-2}b^2+\dots+b^n\end{aligned}$$
<ul><li>There are $n+1$ terms.</li>
<li>The powers of $a$ go down from $n$ to $0$ while the powers of $b$ go up from $0$ to $n$. In every term the powers add up to $n$.</li>
<li>Put brackets round each part: $(2x)^3=8x^3$, not $2x^3$.</li>
<li>Keep the sign with $b$. For $(2x-1)^5$ use $b=-1$, so the signs alternate.</li></ul>`,
    explorer: 'machine'
  },
  {
    id: 'term',
    title: 'Finding a particular term',
    short: 'One term',
    intro: String.raw`<p>The general term of $(a+b)^n$ is</p>
$$T_{r+1}=\binom{n}{r}a^{\,n-r}\,b^{\,r}$$
<ul><li>$r=0$ gives the first term, so the $k$th term uses $r=k-1$.</li>
<li>To find the term in $x^k$, write the power of $x$ in the general term using $r$, set it equal to $k$ and solve for $r$.</li>
<li>The <b>term</b> includes $x$ (for example $560x^3$). The <b>coefficient</b> is only the number ($560$).</li></ul>`,
    explorer: 'term'
  },
  {
    id: 'const',
    title: 'Constant terms',
    short: 'Constant term',
    intro: String.raw`<p>When one part of the bracket contains $\frac{1}{x}$, powers of $x$ can cancel.</p>
<ul><li>Write $\frac{1}{x^q}$ as $x^{-q}$.</li>
<li>Add the powers of $x$ from both parts to get a single power in terms of $r$. For $\left(x^2+\frac{1}{x}\right)^6$ it is $2(6-r)-r=12-3r$.</li>
<li>The <b>constant term</b> (the term independent of $x$) has power $0$. If solving gives an $r$ that is not a whole number, or is outside $0\le r\le n$, there is no such term.</li></ul>`,
    explorer: 'balance'
  },
  {
    id: 'unknown',
    title: 'Finding unknowns',
    short: 'Unknowns',
    intro: String.raw`<ul><li>Write the coefficient using the unknown, then form an equation from the information given.</li>
<li>If the equation has $k^2$ or $k^4$, there can be two solutions. Use the condition given (such as $k>0$) to choose.</li>
<li>If $n$ is unknown, it must be a positive integer. Use $\binom{n}{2}=\frac{n(n-1)}{2}$ and $\binom{n}{3}=\frac{n(n-1)(n-2)}{6}$, or a table of values on the calculator.</li></ul>`,
    explorer: 'tuner'
  },
  {
    id: 'approx',
    title: 'Products and approximations',
    short: 'Estimates',
    intro: String.raw`<ul><li>For a product such as $(1+2x)(1-x)^6$, expand the binomial only as far as you need, then collect every way of making the power you want.</li>
<li>For small $x$, the first few terms of $(1+x)^n$ give a good estimate, because higher powers of $x$ are tiny.</li>
<li>Choose $x$ so the bracket matches the number: $0.98=1-2x$ when $x=0.01$.</li>
<li>Percentage error: $\varepsilon=\left|\dfrac{v_A-v_E}{v_E}\right|\times100\%$, where $v_A$ is the approximate value and $v_E$ is the exact value.</li></ul>`,
    explorer: 'approx'
  },
  {
    id: 'exam',
    title: 'Exam-style practice',
    short: 'Exam style',
    intro: String.raw`<p>Exam questions combine the skills: general term, then an equation, then the answer.</p>
<ul><li>$(a+b)^n$ has $n+1$ terms.</li>
<li>Write the general term first. It earns method marks even if the arithmetic slips.</li>
<li>Read carefully whether the question asks for a term, a coefficient or a value.</li>
<li>Check your answer by substituting it back.</li></ul>`,
    explorer: 'sprint'
  }
];

const QUESTIONS = [
  {
    id: 'P1', section: 'pascal', tag: 'NC',
    stem: String.raw`Row 7 of Pascal's triangle is $1,\;7,\;21,\;35,\;35,\;21,\;7,\;1$.`,
    parts: [
      { id: 'a', prompt: String.raw`Use it to find $\binom{8}{2}$, $\binom{8}{3}$ and $\binom{8}{4}$.`,
        fields: [{ label: String.raw`$\binom{8}{2}$`, ans: 28, tol: 'exact' }, { label: String.raw`$\binom{8}{3}$`, ans: 56, tol: 'exact' }, { label: String.raw`$\binom{8}{4}$`, ans: 70, tol: 'exact' }],
        hints: [String.raw`Row 8 begins with $1$ and $8$. Each entry is the sum of the two entries above it.`,
          String.raw`$\binom{8}{2}=\binom{7}{1}+\binom{7}{2}=7+21$.`,
          String.raw`$\binom{8}{3}=21+35$ and $\binom{8}{4}=35+35$.`],
        solution: String.raw`Add neighbours in row 7: $\binom{8}{2}=7+21=28$, $\binom{8}{3}=21+35=56$, $\binom{8}{4}=35+35=70$. Row 8 is $1,\;8,\;28,\;56,\;70,\;56,\;28,\;8,\;1$.` },
      { id: 'b', prompt: String.raw`Hence write down $\binom{8}{5}$.`,
        fields: [{ ans: 56, tol: 'exact' }],
        hints: [String.raw`Pascal's triangle is symmetric.`, String.raw`$\binom{n}{r}=\binom{n}{n-r}$, so $\binom{8}{5}=\binom{8}{3}$.`],
        solution: String.raw`By symmetry $\binom{8}{5}=\binom{8}{8-5}=\binom{8}{3}=56$.` }
    ]
  },
  {
    id: 'P2', section: 'pascal', tag: 'NC',
    stem: String.raw`Without a calculator, evaluate each of the following. In parts (a) to (c), show the cancelling in your working.`,
    parts: [
      { id: 'a', prompt: String.raw`$\binom{5}{2}$`, fields: [{ ans: 10, tol: 'exact' }],
        hints: [String.raw`$\binom{n}{r}=\dfrac{n!}{r!\,(n-r)!}$`, String.raw`$\binom{5}{2}=\dfrac{5!}{2!\,3!}$. Cancel the $3!$.`, String.raw`$\dfrac{5\times4}{2\times1}$`],
        solution: String.raw`$\binom{5}{2}=\dfrac{5!}{2!\,3!}=\dfrac{5\times4}{2\times1}=10$.` },
      { id: 'b', prompt: String.raw`$\binom{9}{7}$`, fields: [{ ans: 36, tol: 'exact' }],
        hints: [String.raw`Use symmetry first: $\binom{9}{7}=\binom{9}{2}$.`, String.raw`$\binom{9}{2}=\dfrac{9\times8}{2\times1}$`],
        solution: String.raw`$\binom{9}{7}=\dfrac{9!}{7!\,2!}=\dfrac{9\times8}{2\times1}=36$.` },
      { id: 'c', prompt: String.raw`$\binom{12}{10}$`, fields: [{ ans: 66, tol: 'exact' }],
        hints: [String.raw`$\binom{12}{10}=\binom{12}{2}$.`, String.raw`$\dfrac{12\times11}{2\times1}$`],
        solution: String.raw`$\binom{12}{10}=\binom{12}{2}=\dfrac{12\times11}{2}=66$.` },
      { id: 'd', prompt: String.raw`$\binom{10}{0}+\binom{10}{1}+\dots+\binom{10}{10}$`, fields: [{ ans: 1024, tol: 'exact' }],
        hints: [String.raw`These are all the coefficients in the expansion of $(1+x)^{10}$.`, String.raw`Each row of Pascal's triangle adds up to a power of $2$.`, String.raw`Substitute $x=1$: $(1+1)^{10}=2^{10}$.`],
        solution: String.raw`$(1+x)^{10}=\binom{10}{0}+\binom{10}{1}x+\dots+\binom{10}{10}x^{10}$. With $x=1$ the sum is $(1+1)^{10}=2^{10}=1024$.` }
    ]
  },
  {
    id: 'P3', section: 'pascal', tag: 'CA',
    stem: String.raw`Use your calculator to evaluate each of the following.`,
    parts: [
      { id: 'a', prompt: String.raw`$\binom{20}{8}$`, fields: [{ ans: 125970, tol: 'exact' }],
        hints: [String.raw`Calculator app: menu 5:3 Combinations.`, String.raw`Type <code>nCr(20,8)</code> and press enter.`],
        solution: String.raw`nCr(20,8) $=125\,970$.` },
      { id: 'b', prompt: String.raw`$\binom{15}{5}\times2^{10}$`, fields: [{ ans: 3075072, tol: 'exact' }],
        hints: [String.raw`Type <code>nCr(15,5)*2^10</code> on one line.`, String.raw`$\binom{15}{5}=3003$ and $2^{10}=1024$.`],
        solution: String.raw`$\binom{15}{5}\times2^{10}=3003\times1024=3\,075\,072$.` }
    ]
  },
  {
    id: 'P4', section: 'pascal', tag: 'NC',
    stem: String.raw`It is given that $\binom{n}{2}=45$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $n$.`, fields: [{ label: String.raw`$n$`, ans: 10, tol: 'exact' }],
        hints: [String.raw`$\binom{n}{2}=\dfrac{n(n-1)}{2}$`, String.raw`$n(n-1)=90$, so $n^2-n-90=0$.`, String.raw`Factorise: $(n-10)(n+9)=0$. Which value can $n$ take?`],
        solution: String.raw`$\dfrac{n(n-1)}{2}=45\Rightarrow n^2-n-90=0\Rightarrow(n-10)(n+9)=0$. Since $n$ is a positive integer, $n=10$. Check: $\binom{10}{2}=\dfrac{10\times9}{2}=45$.` }
    ]
  },
  {
    id: 'P5', section: 'pascal', tag: 'CA',
    stem: String.raw`It is given that $\binom{n}{3}=1140$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $n$.`, fields: [{ label: String.raw`$n$`, ans: 20, tol: 'exact' }],
        hints: [String.raw`Graphs app: define $f_1(x)=\text{nCr}(x,3)$.`, String.raw`Open the table with ctrl T and scroll down until you see $1140$.`, String.raw`Or solve $\dfrac{n(n-1)(n-2)}{6}=1140$ in the Calculator app with menu 3:1 Numerical Solve.`],
        solution: String.raw`With $f_1(x)=\text{nCr}(x,3)$, the table shows $f_1(20)=1140$, so $n=20$. Check: $\dfrac{20\times19\times18}{6}=1140$.` }
    ]
  },
  {
    id: 'E1', section: 'expand', tag: 'NC',
    stem: String.raw`Expand $(x+2)^4$.`,
    parts: [
      { id: 'a', prompt: String.raw`Enter the coefficient of each term.`, sep: '+',
        fields: [{ unit: String.raw`$x^4$`, ans: 1, tol: 'exact' }, { unit: String.raw`$x^3$`, ans: 8, tol: 'exact' }, { unit: String.raw`$x^2$`, ans: 24, tol: 'exact' }, { unit: String.raw`$x$`, ans: 32, tol: 'exact' }, { ans: 16, tol: 'exact' }],
        hints: [String.raw`Use row 4 of Pascal's triangle: $1,\;4,\;6,\;4,\;1$.`, String.raw`With $a=x$ and $b=2$: $x^4+4x^3(2)+6x^2(2^2)+4x(2^3)+2^4$.`, String.raw`The powers of $2$ are $2,\;4,\;8,\;16$.`],
        solution: String.raw`$(x+2)^4=x^4+4x^3(2)+6x^2(2^2)+4x(2^3)+2^4=x^4+8x^3+24x^2+32x+16$.<br>Check with $x=1$: $3^4=81$ and $1+8+24+32+16=81$.` }
    ]
  },
  {
    id: 'E2', section: 'expand', tag: 'NC',
    stem: String.raw`Expand $(2x-1)^5$.`,
    parts: [
      { id: 'a', prompt: String.raw`Enter the coefficient of each term. Type a negative coefficient with a minus sign.`, sep: '+',
        fields: [{ unit: String.raw`$x^5$`, ans: 32, tol: 'exact' }, { unit: String.raw`$x^4$`, ans: -80, tol: 'exact' }, { unit: String.raw`$x^3$`, ans: 80, tol: 'exact' }, { unit: String.raw`$x^2$`, ans: -40, tol: 'exact' }, { unit: String.raw`$x$`, ans: 10, tol: 'exact' }, { ans: -1, tol: 'exact' }],
        hints: [String.raw`Row 5 of Pascal's triangle is $1,\;5,\;10,\;10,\;5,\;1$.`, String.raw`Use $a=2x$ and $b=-1$, so the signs alternate.`, String.raw`$(2x)^5=32x^5$, $(2x)^4=16x^4$, $(2x)^3=8x^3$, $(2x)^2=4x^2$.`],
        solution: String.raw`$(2x)^5+5(2x)^4(-1)+10(2x)^3(-1)^2+10(2x)^2(-1)^3+5(2x)(-1)^4+(-1)^5$<br>$=32x^5-80x^4+80x^3-40x^2+10x-1$.<br>Check with $x=1$: $(2-1)^5=1$ and $32-80+80-40+10-1=1$.` }
    ]
  },
  {
    id: 'E3', section: 'expand', tag: 'NC',
    stem: String.raw`Find the first three terms, in ascending powers of $x$, of $\left(3-\dfrac{x}{2}\right)^4$. Give each coefficient as an exact value.`,
    parts: [
      { id: 'a', prompt: String.raw`Enter the coefficients. You can type a fraction such as 5/2.`, sep: '+',
        fields: [{ ans: 81, tol: 'exact' }, { unit: String.raw`$x$`, ans: -54, tol: 'exact' }, { unit: String.raw`$x^2$`, ans: 13.5, tol: 'exact', show: '27/2' }],
        hints: [String.raw`Ascending powers means start with the constant term.`, String.raw`Use $a=3$ and $b=-\dfrac{x}{2}$.`, String.raw`The third term is $\binom{4}{2}\,3^2\left(-\dfrac{x}{2}\right)^2=6\times9\times\dfrac{x^2}{4}$.`],
        solution: String.raw`$3^4=81$, $\;\binom{4}{1}3^3\left(-\dfrac{x}{2}\right)=4\times27\times\left(-\dfrac{1}{2}\right)x=-54x$, $\;\binom{4}{2}3^2\left(\dfrac{x^2}{4}\right)=\dfrac{54}{4}x^2=\dfrac{27}{2}x^2$.<br>So $\left(3-\dfrac{x}{2}\right)^4=81-54x+\dfrac{27}{2}x^2+\dots$` }
    ]
  },
  {
    id: 'E4', section: 'expand', tag: 'NC',
    stem: String.raw`Expand $\left(1+\sqrt{2}\right)^4$ and write it in the form $a+b\sqrt{2}$, where $a,b\in\mathbb{Z}$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $a$ and $b$.`,
        fields: [{ label: String.raw`$a$`, ans: 17, tol: 'exact' }, { label: String.raw`$b$`, ans: 12, tol: 'exact' }],
        hints: [String.raw`Use row 4: $1,\;4,\;6,\;4,\;1$, with $\sqrt{2}$ as the second term in the bracket.`, String.raw`$(\sqrt{2})^2=2$, $(\sqrt{2})^3=2\sqrt{2}$, $(\sqrt{2})^4=4$.`, String.raw`Collect the whole numbers and the $\sqrt{2}$ terms separately.`],
        solution: String.raw`$1+4\sqrt{2}+6(2)+4(2\sqrt{2})+4=(1+12+4)+(4+8)\sqrt{2}=17+12\sqrt{2}$, so $a=17$, $b=12$.` }
    ]
  },
  {
    id: 'T1', section: 'term', tag: 'NC',
    stem: String.raw`Find the coefficient of $x^3$ in the expansion of $(2+x)^7$.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^3$:`, fields: [{ ans: 560, tol: 'exact' }],
        hints: [String.raw`The general term is $\binom{7}{r}2^{7-r}x^r$.`, String.raw`For $x^3$ you need $r=3$.`, String.raw`$\binom{7}{3}=35$ and $2^4=16$.`],
        solution: String.raw`$T_4=\binom{7}{3}2^4x^3=35\times16\,x^3=560x^3$. The coefficient is $560$.` }
    ]
  },
  {
    id: 'T2', section: 'term', tag: 'NC',
    stem: String.raw`Find the coefficient of $x^2$ in the expansion of $(3x-2)^5$.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^2$:`, fields: [{ ans: -720, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{5}{r}(3x)^{5-r}(-2)^r$.`, String.raw`The power of $x$ is $5-r$. Set $5-r=2$, so $r=3$.`, String.raw`$\binom{5}{3}\times3^2\times(-2)^3$. Watch the sign.`],
        solution: String.raw`$r=3$: $\binom{5}{3}(3x)^2(-2)^3=10\times9x^2\times(-8)=-720x^2$. The coefficient is $-720$.` }
    ]
  },
  {
    id: 'T3', section: 'term', tag: 'CA',
    stem: String.raw`Find the coefficient of $x^6$ in the expansion of $(2x+5)^{10}$.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^6$:`, fields: [{ ans: 8400000, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{10}{r}(2x)^{10-r}5^r$.`, String.raw`Set $10-r=6$, so $r=4$.`, String.raw`Type <code>nCr(10,4)*2^6*5^4</code>.`],
        solution: String.raw`$r=4$: $\binom{10}{4}(2x)^6\,5^4=210\times64\times625\,x^6=8\,400\,000\,x^6$. The coefficient is $8\,400\,000$.` }
    ]
  },
  {
    id: 'T4', section: 'term', tag: 'CA',
    stem: String.raw`Find the coefficient of $x^4$ in the expansion of $(1.5-0.4x)^9$. Give your answer to 3 significant figures.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^4$:`, fields: [{ ans: 24.4944, tol: 'sf3' }],
        hints: [String.raw`$T_{r+1}=\binom{9}{r}(1.5)^{9-r}(-0.4x)^r$.`, String.raw`For $x^4$ you need $r=4$. Is $(-0.4)^4$ positive or negative?`, String.raw`Type <code>nCr(9,4)*1.5^5*(-0.4)^4</code>.`],
        solution: String.raw`$r=4$: $\binom{9}{4}(1.5)^5(-0.4)^4=126\times7.59375\times0.0256=24.4944$. The coefficient is $24.5$ (3 s.f.).` }
    ]
  },
  {
    id: 'T5', section: 'term', tag: 'NC',
    stem: String.raw`Find the 4th term in the expansion of $(x-2)^6$ in descending powers of $x$.`,
    parts: [
      { id: 'a', prompt: String.raw`Write the 4th term as $c\,x^k$.`,
        fields: [{ label: String.raw`Coefficient $c$`, ans: -160, tol: 'exact' }, { label: String.raw`Power $k$`, ans: 3, tol: 'exact' }],
        hints: [String.raw`The 4th term uses $r=3$.`, String.raw`$T_4=\binom{6}{3}x^{3}(-2)^3$.`, String.raw`$\binom{6}{3}=20$ and $(-2)^3=-8$.`],
        solution: String.raw`$T_4=\binom{6}{3}x^{6-3}(-2)^3=20x^3(-8)=-160x^3$.` }
    ]
  },
  {
    id: 'C1', section: 'const', tag: 'NC',
    stem: String.raw`Find the constant term in the expansion of $\left(x+\dfrac{2}{x}\right)^6$.`,
    parts: [
      { id: 'a', prompt: String.raw`Constant term:`, fields: [{ ans: 160, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{6}{r}x^{6-r}\left(2x^{-1}\right)^r=\binom{6}{r}2^r x^{6-2r}$.`, String.raw`Set $6-2r=0$, so $r=3$.`, String.raw`$\binom{6}{3}\times2^3=20\times8$.`],
        solution: String.raw`The power of $x$ is $6-2r=0\Rightarrow r=3$. The constant term is $\binom{6}{3}2^3=20\times8=160$.` }
    ]
  },
  {
    id: 'C2', section: 'const', tag: 'NC',
    stem: String.raw`Consider the expansion of $\left(2x^2-\dfrac{1}{x}\right)^6$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find the term independent of $x$.`, fields: [{ ans: 60, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{6}{r}(2x^2)^{6-r}\left(-x^{-1}\right)^r$.`, String.raw`The power of $x$ is $2(6-r)-r=12-3r$. Set it equal to $0$.`, String.raw`$r=4$: $\binom{6}{4}\,2^2\,(-1)^4$.`],
        solution: String.raw`$12-3r=0\Rightarrow r=4$. The term is $\binom{6}{4}(2x^2)^2\left(-\dfrac{1}{x}\right)^4=15\times4x^4\times\dfrac{1}{x^4}=60$.` },
      { id: 'b', prompt: String.raw`Find the coefficient of $x^3$.`, fields: [{ ans: -160, tol: 'exact' }],
        hints: [String.raw`Set $12-3r=3$.`, String.raw`$r=3$: $\binom{6}{3}\,2^3\,(-1)^3$.`],
        solution: String.raw`$12-3r=3\Rightarrow r=3$. $\binom{6}{3}(2x^2)^3\left(-\dfrac{1}{x}\right)^3=20\times8x^6\times\left(-\dfrac{1}{x^3}\right)=-160x^3$. The coefficient is $-160$.` }
    ]
  },
  {
    id: 'C3', section: 'const', tag: 'NC',
    stem: String.raw`Find the constant term in the expansion of $\left(x-\dfrac{1}{2x}\right)^8$. Give your answer as an exact value.`,
    parts: [
      { id: 'a', prompt: String.raw`Constant term:`, fields: [{ ans: 4.375, tol: 'exact', show: '35/8' }],
        hints: [String.raw`$\left(-\dfrac{1}{2x}\right)^r=\left(-\dfrac{1}{2}\right)^r x^{-r}$.`, String.raw`The power of $x$ is $8-2r$, so $r=4$.`, String.raw`$\binom{8}{4}\left(-\dfrac{1}{2}\right)^4=70\times\dfrac{1}{16}$. Simplify the fraction.`],
        solution: String.raw`$8-2r=0\Rightarrow r=4$. $\binom{8}{4}x^4\left(-\dfrac{1}{2x}\right)^4=70\times\dfrac{1}{16}=\dfrac{35}{8}$.` }
    ]
  },
  {
    id: 'C4', section: 'const', tag: 'CA',
    stem: String.raw`Consider the expansion of $\left(3x+\dfrac{2}{x^2}\right)^9$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find the constant term.`, fields: [{ ans: 489888, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{9}{r}(3x)^{9-r}\left(2x^{-2}\right)^r$.`, String.raw`The power of $x$ is $(9-r)-2r=9-3r$, so $r=3$.`, String.raw`Type <code>nCr(9,3)*3^6*2^3</code>.`],
        solution: String.raw`$9-3r=0\Rightarrow r=3$. $\binom{9}{3}3^6\,2^3=84\times729\times8=489\,888$.` },
      { id: 'b', prompt: String.raw`Find the coefficient of $x^3$.`, fields: [{ ans: 314928, tol: 'exact' }],
        hints: [String.raw`Set $9-3r=3$.`, String.raw`$r=2$: type <code>nCr(9,2)*3^7*2^2</code>.`],
        solution: String.raw`$9-3r=3\Rightarrow r=2$. $\binom{9}{2}3^7\,2^2=36\times2187\times4=314\,928$.` }
    ]
  },
  {
    id: 'U1', section: 'unknown', tag: 'NC',
    stem: String.raw`The coefficient of $x^2$ in the expansion of $(1+kx)^6$ is $135$. Find the value of $k$, given that $k>0$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $k$.`, fields: [{ label: String.raw`$k$`, ans: 3, tol: 'exact' }],
        hints: [String.raw`The term in $x^2$ is $\binom{6}{2}(kx)^2$.`, String.raw`$15k^2=135$`, String.raw`$k^2=9$. Use $k>0$.`],
        solution: String.raw`$\binom{6}{2}k^2=15k^2=135\Rightarrow k^2=9\Rightarrow k=\pm3$. Since $k>0$, $k=3$.` }
    ]
  },
  {
    id: 'U2', section: 'unknown', tag: 'NC',
    stem: String.raw`In the expansion of $(1+ax)^n$, the first three terms are $1+12x+63x^2$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $n$ and $a$.`,
        fields: [{ label: String.raw`$n$`, ans: 8, tol: 'exact' }, { label: String.raw`$a$`, ans: 1.5, tol: 'exact' }],
        hints: [String.raw`Coefficient of $x$: $na=12$. Coefficient of $x^2$: $\dfrac{n(n-1)}{2}a^2=63$.`, String.raw`Write $\dfrac{n(n-1)}{2}a^2$ as $\dfrac{(na)(n-1)a}{2}=\dfrac{12(n-1)a}{2}$, so $(n-1)a=10.5$.`, String.raw`Subtract: $na-(n-1)a=a$.`],
        solution: String.raw`$na=12$ and $\dfrac{n(n-1)a^2}{2}=\dfrac{(na)(n-1)a}{2}=\dfrac{12(n-1)a}{2}=63\Rightarrow 6(n-1)a=63\Rightarrow(n-1)a=10.5$. Subtracting, $a=12-10.5=1.5$, so $n=12\div1.5=8$.<br>Check: $\binom{8}{2}(1.5)^2=28\times2.25=63$.` }
    ]
  },
  {
    id: 'U3', section: 'unknown', tag: 'NC',
    stem: String.raw`In the expansion of $(2+x)^n$, the coefficients of $x^2$ and $x^3$ are equal. Find $n$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $n$.`, fields: [{ label: String.raw`$n$`, ans: 8, tol: 'exact' }],
        hints: [String.raw`$\binom{n}{2}2^{n-2}=\binom{n}{3}2^{n-3}$`, String.raw`Divide both sides by $2^{n-3}$: $2\binom{n}{2}=\binom{n}{3}$.`, String.raw`$n(n-1)=\dfrac{n(n-1)(n-2)}{6}$. Divide by $n(n-1)$.`],
        solution: String.raw`$2\cdot\dfrac{n(n-1)}{2}=\dfrac{n(n-1)(n-2)}{6}$. Since $n\ge3$, $n(n-1)\ne0$, so we can divide: $1=\dfrac{n-2}{6}\Rightarrow n=8$.<br>Check: $\binom{8}{2}2^6=28\times64=1792$ and $\binom{8}{3}2^5=56\times32=1792$.` }
    ]
  },
  {
    id: 'U4', section: 'unknown', tag: 'CA',
    stem: String.raw`The coefficient of $x^4$ in the expansion of $(3+kx)^8$ is $18$, where $k>0$. Give $k$ to 3 significant figures.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $k$.`, fields: [{ label: String.raw`$k$`, ans: 0.2373681, tol: 'sf3' }],
        hints: [String.raw`The term in $x^4$ is $\binom{8}{4}3^4(kx)^4$.`, String.raw`$70\times81\,k^4=5670k^4=18$`, String.raw`$k=\sqrt[4]{\dfrac{18}{5670}}$. Type <code>(18/5670)^(1/4)</code>.`],
        solution: String.raw`$\binom{8}{4}3^4k^4=5670k^4=18\Rightarrow k^4=\dfrac{18}{5670}\Rightarrow k=\left(\dfrac{18}{5670}\right)^{1/4}=0.237368\ldots$ Since $k>0$, $k=0.237$ (3 s.f.).` }
    ]
  },
  {
    id: 'U5', section: 'unknown', tag: 'CA',
    stem: String.raw`The coefficient of $x^3$ in the expansion of $(1+2x)^n$ is $1320$. Find $n$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find $n$.`, fields: [{ label: String.raw`$n$`, ans: 11, tol: 'exact' }],
        hints: [String.raw`The term in $x^3$ is $\binom{n}{3}(2x)^3$.`, String.raw`$8\binom{n}{3}=1320$, so $\binom{n}{3}=165$.`, String.raw`Graphs app: $f_1(x)=\text{nCr}(x,3)$, then ctrl T for the table.`],
        solution: String.raw`$\binom{n}{3}2^3=1320\Rightarrow\binom{n}{3}=165$. The table of $f_1(x)=\text{nCr}(x,3)$ gives $f_1(11)=165$, so $n=11$.` }
    ]
  },
  {
    id: 'A1', section: 'approx', tag: 'NC',
    stem: String.raw`Find the coefficient of $x^2$ in the expansion of $(1+2x)(1-x)^6$.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^2$:`, fields: [{ ans: 3, tol: 'exact' }],
        hints: [String.raw`$(1-x)^6=1-6x+15x^2-\dots$`, String.raw`$x^2$ comes from $1\times15x^2$ and from $2x\times(-6x)$.`, String.raw`$15-12$`],
        solution: String.raw`$(1+2x)(1-6x+15x^2-\dots)$. The $x^2$ terms are $15x^2$ and $2x(-6x)=-12x^2$, so the coefficient is $15-12=3$.` }
    ]
  },
  {
    id: 'A2', section: 'approx', tag: 'NC',
    stem: String.raw`Find the coefficient of $x^3$ in the expansion of $(x+3)(2x-1)^5$.`,
    parts: [
      { id: 'a', prompt: String.raw`Coefficient of $x^3$:`, fields: [{ ans: 200, tol: 'exact' }],
        hints: [String.raw`Use your expansion of $(2x-1)^5$ from E2. You only need its $x^2$ and $x^3$ terms.`, String.raw`$x^3$ comes from $x\times(-40x^2)$ and from $3\times80x^3$.`, String.raw`$-40+240$`],
        solution: String.raw`$x(-40x^2)+3(80x^3)=-40x^3+240x^3=200x^3$. The coefficient is $200$.` }
    ]
  },
  {
    id: 'A3', section: 'approx', tag: 'NC',
    stem: String.raw`Consider the expansion of $(1-2x)^7$.`,
    parts: [
      { id: 'a', prompt: String.raw`Find the first three terms in ascending powers of $x$. Enter the coefficients.`, sep: '+',
        fields: [{ ans: 1, tol: 'exact' }, { unit: String.raw`$x$`, ans: -14, tol: 'exact' }, { unit: String.raw`$x^2$`, ans: 84, tol: 'exact' }],
        hints: [String.raw`Use $a=1$ and $b=-2x$.`, String.raw`$\binom{7}{1}(-2x)=-14x$`, String.raw`$\binom{7}{2}(-2x)^2=21\times4x^2$`],
        solution: String.raw`$(1-2x)^7=1+\binom{7}{1}(-2x)+\binom{7}{2}(-2x)^2+\dots=1-14x+84x^2+\dots$` },
      { id: 'b', prompt: String.raw`Use your answer to part (a) with a suitable value of $x$ to estimate $0.98^7$. Give the exact value of your estimate.`, fields: [{ ans: 0.8684, tol: 'exact' }],
        hints: [String.raw`Solve $1-2x=0.98$.`, String.raw`$x=0.01$`, String.raw`$1-14(0.01)+84(0.01)^2=1-0.14+0.0084$`],
        solution: String.raw`$1-2x=0.98\Rightarrow x=0.01$. $\;0.98^7\approx1-14(0.01)+84(0.0001)=1-0.14+0.0084=0.8684$.` },
      { id: 'c', tag: 'CA', prompt: String.raw`Use your calculator to find the percentage error in this estimate. Give your answer to 3 significant figures.`, fields: [{ unit: '%', ans: 0.031616021, tol: 'sf3' }],
        hints: [String.raw`$\varepsilon=\left|\dfrac{v_A-v_E}{v_E}\right|\times100\%$, with $v_A=0.8684$ and $v_E=0.98^7$.`, String.raw`Type 0.98^7, then press ctrl var and store it as <code>v</code> so you do not lose accuracy.`, String.raw`Type <code>abs((0.8684-v)/v)*100</code>.`],
        solution: String.raw`$v_E=0.98^7=0.868125\ldots$, so $\varepsilon=\left|\dfrac{0.8684-0.868125\ldots}{0.868125\ldots}\right|\times100\%=0.0316\%$ (3 s.f.).` }
    ]
  },
  {
    id: 'A4', section: 'approx', tag: 'NC',
    stem: String.raw`Let $f(x)=(2+x)^5-(2-x)^5$.`,
    parts: [
      { id: 'a', prompt: String.raw`Expand and simplify $f(x)$. Enter the coefficients.`, sep: '+',
        fields: [{ unit: String.raw`$x^5$`, ans: 2, tol: 'exact' }, { unit: String.raw`$x^3$`, ans: 80, tol: 'exact' }, { unit: String.raw`$x$`, ans: 160, tol: 'exact' }],
        hints: [String.raw`In $(2-x)^5$ the odd powers of $x$ change sign.`, String.raw`The even powers cancel and the odd powers double.`, String.raw`$f(x)=2\left[\binom{5}{1}2^4x+\binom{5}{3}2^2x^3+x^5\right]$`],
        solution: String.raw`$(2+x)^5=32+80x+80x^2+40x^3+10x^4+x^5$ and $(2-x)^5=32-80x+80x^2-40x^3+10x^4-x^5$.<br>Subtracting: $f(x)=2x^5+80x^3+160x$.` },
      { id: 'b', prompt: String.raw`Hence find the exact value of $2.1^5-1.9^5$.`, fields: [{ ans: 16.08002, tol: 'exact' }],
        hints: [String.raw`$2.1^5-1.9^5=f(0.1)$.`, String.raw`$160(0.1)+80(0.1)^3+2(0.1)^5$`, String.raw`$16+0.08+0.00002$`],
        solution: String.raw`$f(0.1)=2(0.00001)+80(0.001)+160(0.1)=0.00002+0.08+16=16.08002$.` }
    ]
  },
  {
    id: 'X1', section: 'exam', tag: 'NC',
    stem: String.raw`Consider the expansion of $\left(3x+\dfrac{k}{x}\right)^8$, where $k>0$.`,
    parts: [
      { id: 'a', prompt: String.raw`Write down the number of terms in this expansion.`, fields: [{ unit: 'terms', ans: 9, tol: 'exact' }],
        hints: [String.raw`$(a+b)^n$ has $n+1$ terms.`],
        solution: String.raw`$n=8$, so there are $8+1=9$ terms.` },
      { id: 'b', prompt: String.raw`The constant term is $90\,720$. Find $k$.`, fields: [{ label: String.raw`$k$`, ans: 2, tol: 'exact' }],
        hints: [String.raw`$T_{r+1}=\binom{8}{r}(3x)^{8-r}\left(kx^{-1}\right)^r=\binom{8}{r}3^{8-r}k^r x^{8-2r}$.`, String.raw`$r=4$: $\binom{8}{4}3^4k^4=5670k^4$.`, String.raw`$5670k^4=90\,720\Rightarrow k^4=16$.`],
        solution: String.raw`$8-2r=0\Rightarrow r=4$. $\binom{8}{4}3^4k^4=70\times81\,k^4=5670k^4=90\,720\Rightarrow k^4=16\Rightarrow k=2$ (since $k>0$).` },
      { id: 'c', prompt: String.raw`Find the coefficient of $x^2$.`, fields: [{ ans: 108864, tol: 'exact' }],
        hints: [String.raw`Set $8-2r=2$, so $r=3$.`, String.raw`$\binom{8}{3}3^5k^3$ with $k=2$.`, String.raw`$56\times243\times8$`],
        solution: String.raw`$r=3$: $\binom{8}{3}3^5\,2^3=56\times243\times8=108\,864$.` }
    ]
  },
  {
    id: 'X2', section: 'exam', tag: 'CA',
    stem: String.raw`Consider the expansion of $(0.6+0.4x)^{12}$. This is an extension question.`,
    parts: [
      { id: 'a', prompt: String.raw`Find the power of $x$ in the term with the largest coefficient, and that coefficient to 3 significant figures.`,
        fields: [{ label: String.raw`Power of $x$`, ans: 5, tol: 'exact' }, { label: 'Coefficient', ans: 0.22703034, tol: 'sf3' }],
        hints: [String.raw`$T_{r+1}=\binom{12}{r}0.6^{12-r}(0.4x)^r$, so the coefficient of $x^r$ is $\binom{12}{r}0.6^{12-r}0.4^r$.`, String.raw`Graphs app: $f_1(x)=\text{nCr}(12,x)\times0.6^{12-x}\times0.4^x$, then ctrl T for the table. Here $x$ plays the role of $r$.`, String.raw`Compare the values for $x=4$, $5$ and $6$.`],
        solution: String.raw`The table gives $f_1(4)=0.212841\ldots$, $f_1(5)=0.227030\ldots$ and $f_1(6)=0.176579\ldots$, so the largest coefficient is in the term in $x^5$. It is $0.227$ (3 s.f.).` }
    ]
  },
  {
    id: 'X3', section: 'exam', tag: 'NC',
    stem: String.raw`Find the sum of all the coefficients in the expansion of $(3x-2)^9$.`,
    parts: [
      { id: 'a', prompt: String.raw`Sum of the coefficients:`, fields: [{ ans: 1, tol: 'exact' }],
        hints: [String.raw`If $(3x-2)^9=c_9x^9+c_8x^8+\dots+c_0$, what happens when $x=1$?`, String.raw`Substitute $x=1$ into $(3x-2)^9$.`],
        solution: String.raw`Substituting $x=1$ gives the sum of the coefficients: $(3-2)^9=1^9=1$.` }
    ]
  }
];

function partTag_(q, p) {
  return p.tag || q.tag;
}

function publicBank_() {
  return {
    title: CONFIG.TITLE,
    course: CONFIG.COURSE,
    author: CONFIG.AUTHOR,
    sections: SECTIONS,
    questions: QUESTIONS.map(function (q) {
      return {
        id: q.id, section: q.section, tag: q.tag, stem: q.stem,
        parts: q.parts.map(function (p) {
          return {
            id: p.id, prompt: p.prompt, tag: partTag_(q, p), sep: p.sep || '', hintCount: (p.hints || []).length,
            fields: p.fields.map(function (f) {
              return { label: f.label || '', unit: f.unit || '', type: f.type || 'number', options: f.options || null, prefix: !!f.prefix };
            })
          };
        })
      };
    })
  };
}

function findQuestion_(qid) {
  const q = QUESTIONS.filter(function (x) { return x.id === qid; })[0];
  if (!q) throw new Error('Unknown question.');
  return q;
}

function findPart_(qid, pid) {
  const p = findQuestion_(qid).parts.filter(function (x) { return x.id === pid; })[0];
  if (!p) throw new Error('Unknown part.');
  return p;
}

function cleanNumber_(raw) {
  let s = String(raw == null ? '' : raw).trim();
  s = s.replace(/[\u2212\u2012\u2013\u2014\u2015\ufe63\uff0d]/g, '-').replace(/\u00b7/g, '.');
  s = s.replace(/[$,   ]/g, '').replace(/%$/, '').replace(/\s*terms?$/i, '');
  s = s.replace(/\s*\*?\s*x(\^?\(?\d+\)?|[²³⁴-⁹¹])?$/i, '');
  s = s.replace(/^\+/, '').trim();
  return s;
}

function parseAnswer_(raw) {
  const s = cleanNumber_(raw);
  if (s === '') return null;
  let m = s.match(/^(-?)(\d+)\s+(\d+)\/(\d+)$/);
  if (m) {
    const d = parseInt(m[4], 10);
    if (!d) return null;
    const v = parseInt(m[2], 10) + parseInt(m[3], 10) / d;
    return { value: m[1] ? -v : v, fraction: true };
  }
  m = s.replace(/\s+/g, '').match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (m) {
    const d = parseFloat(m[2]);
    if (d === 0) return null;
    return { value: parseFloat(m[1]) / d, fraction: true };
  }
  const t = s.replace(/\s+/g, '');
  if (!/^-?(\d+\.?\d*|\.\d+)$/.test(t)) return null;
  const digits = t.replace(/^-/, '');
  const dot = digits.indexOf('.');
  const decimals = dot === -1 ? 0 : digits.length - dot - 1;
  const sig = digits.replace('.', '').replace(/^0+/, '').length;
  return { value: parseFloat(t), fraction: false, decimals: decimals, sig: sig };
}

function fieldCheck_(field, raw) {
  if (field.type === 'choice') {
    return { ok: String(raw || '').trim().toLowerCase() === String(field.ans).toLowerCase() };
  }
  const p = parseAnswer_(raw);
  if (!p || !isFinite(p.value)) return { invalid: 'Enter a number in each box. You can type a fraction such as 5/2 and a minus sign for negatives.' };
  const v = p.value, a = field.ans;
  const close = Math.abs(v - a) <= 1e-9 * Math.max(1, Math.abs(a));
  if (field.tol !== 'sf3') return { ok: close };
  if (close) return { ok: true };
  if (p.fraction) return { ok: false };
  if (p.sig < 3) {
    const e = Math.floor(Math.log10(Math.abs(a)));
    const near = Math.abs(v - a) <= Math.pow(10, e - p.sig + 1);
    return near ? { invalid: 'Give this answer to 3 significant figures.' } : { ok: false };
  }
  const unit = Math.pow(10, -p.decimals);
  if (Math.abs(v - a) <= unit / 2 + 1e-12) return { ok: true };
  const truncated = p.sig >= 4 && Math.abs(v - a) < unit && Math.abs(v) <= Math.abs(a) && v * a >= 0;
  return { ok: truncated };
}

function checkResponse_(part, values) {
  if (!Array.isArray(values) || values.length !== part.fields.length) {
    return { status: 'invalid', message: 'Please fill in every box.' };
  }
  let allRight = true;
  const perField = [];
  for (let i = 0; i < part.fields.length; i++) {
    const r = fieldCheck_(part.fields[i], values[i]);
    if (r.invalid) return { status: 'invalid', message: r.invalid };
    perField.push(!!r.ok);
    if (!r.ok) allRight = false;
  }
  return { status: allRight ? 'correct' : 'wrong', perField: perField };
}

function hintsUpTo_(part, wrong) {
  return (part.hints || []).slice(0, Math.min(wrong, (part.hints || []).length));
}

function unlockedSolutions_(progress) {
  const out = {};
  Object.keys(progress).forEach(function (k) {
    const p = progress[k];
    if (p.status === 'correct' || p.solutionViewed) {
      const bits = k.split('|');
      try { out[k] = findPart_(bits[0], bits[1]).solution; } catch (e) { }
    }
  });
  return out;
}

function hintsFor_(progress) {
  const out = {};
  Object.keys(progress).forEach(function (k) {
    if (progress[k].wrong > 0) {
      const bits = k.split('|');
      try { out[k] = hintsUpTo_(findPart_(bits[0], bits[1]), progress[k].wrong); } catch (e) { }
    }
  });
  return out;
}

function answerText_(f) {
  if (f.tol === 'sf3') return Number(f.ans.toPrecision(3)).toString();
  if (f.show) return f.show;
  return String(f.ans);
}

const KEY='portfolio:binomial:v1';
const EMAIL='demo.learner@example.invalid';
const student={name:'Demo Learner',cls:'11 AA SL'};
function seedLearner(s){
  const parts=QUESTIONS.flatMap(q=>q.parts.map(p=>({q:q.id,p})));
  parts.forEach(({q,p},i)=>{
    const key=q+'|'+p.id;
    if(s.progress[key])return;
    const at=new Date(Date.now()-(parts.length-i+20)*6000).toISOString();
    const response=p.fields.map(f=>f.type==='choice'?'Not sure':String(Number(f.ans)+1)).join(' ; ');
    s.progress[key]={status:'trying',attempts:1,wrong:1,solutionViewed:false,last:response,updated:at};
    s.history.push({email:EMAIL,q,part:p.id,at,response,result:'Incorrect',attempt:1});
  });
  return s;
}
function read(){try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&s.progress&&s.working&&Array.isArray(s.history))return seedLearner(s);}catch(e){}return seedLearner({progress:{},working:{},history:[]});}
function write(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){throw new Error('Your browser could not save this demo. Allow local storage and try again.');}}
function bootstrap(){const s=read();return {bank:publicBank_(),email:EMAIL,student,classes:CONFIG.CLASSES,teacher:true,trackerUrl:'tracker.html',triesBeforeSolution:3,progress:s.progress,working:s.working,solutions:unlockedSolutions_(s.progress),hints:hintsFor_(s.progress)};}
function submit(q,p,values){const part=findPart_(q,p),res=checkResponse_(part,values);if(res.status==='invalid')return res;const s=read(),k=q+'|'+p,old=s.progress[k]||{attempts:0,wrong:0};if(old.status==='correct')return {status:'correct',already:true,attempts:old.attempts,wrong:old.wrong,solution:part.solution};const at=new Date().toISOString(),wrong=old.wrong+(res.status==='wrong'?1:0);const pr={status:res.status==='correct'?'correct':old.solutionViewed?'viewed':'trying',attempts:old.attempts+1,wrong,solutionViewed:!!old.solutionViewed,last:values.map(v=>String(v).slice(0,40)).join(' ; '),updated:at};s.progress[k]=pr;s.history.push({email:EMAIL,q,part:p,at,response:pr.last,result:res.status==='correct'?'Correct':'Incorrect',attempt:pr.attempts});write(s);return {...res,attempts:pr.attempts,wrong,viewed:pr.solutionViewed,...(res.status==='correct'?{solution:part.solution}:{hints:hintsUpTo_(part,wrong),canReveal:wrong>=3})};}
function reveal(q,p){const s=read(),pr=s.progress[q+'|'+p];if(!pr||(pr.status!=='correct'&&pr.wrong<3))throw new Error('Try the question three times first.');if(pr.status!=='correct'){pr.status='viewed';pr.solutionViewed=true;pr.updated=new Date().toISOString();s.history.push({email:EMAIL,q,part:p,at:pr.updated,response:'',result:'Solution viewed',attempt:pr.attempts});write(s);}return {solution:findPart_(q,p).solution};}
function tracker(){const s=read(),now=Date.now(),iso=(mins)=>new Date(now-mins*60000).toISOString();const students=[],progress=[],working=[],history=[];const parts=QUESTIONS.flatMap(q=>q.parts.map(p=>({q:q.id,p:p.id,section:q.section,tag:partTag_(q,p),stem:q.stem,prompt:p.prompt,answer:p.fields.map(answerText_).join(', ')})));
 for(let i=0;i<8;i++){const email='fictional.'+(i+1)+'@example.invalid',name='Fictional Student '+String(i+1).padStart(2,'0');students.push({email,name,cls:'11 AA SL',firstSeen:iso(35),lastActive:iso(1+((i*3+parts.length-1)%8)*.08)});for(let j=0;j<parts.length;j++){const pt=parts[j],part=findPart_(pt.q,pt.p),mode=(i+j)%(pt.section==='exam'?5:7),status=mode===0?'trying':mode===1?'viewed':'correct',wrong=mode===0?3:mode===1?3:mode===2?1:0,attempts=status==='correct'?wrong+1:3,wrongResponse=part.fields.map(f=>f.type==='choice'?'Not sure':String(Number(f.ans)+1)).join(' ; '),last=status==='correct'?part.fields.map(answerText_).join(' ; '):wrongResponse,updated=iso(1+(parts.length-1-j)*.18+((i*3+j)%8)*.08);progress.push({email,q:pt.q,p:pt.p,status,attempts,wrong,viewed:status==='viewed',last,updated});for(let a=1;a<=attempts;a++)history.push({email,q:pt.q,part:pt.p,at:updated,response:a===attempts&&status==='correct'?last:wrongResponse,result:a===attempts&&status==='correct'?'Correct':'Incorrect',attempt:a});if(status==='viewed')history.push({email,q:pt.q,part:pt.p,at:updated,response:'',result:'Solution viewed',attempt:attempts});}working.push({email,q:'P1',text:'I added neighbouring entries in row 7 to find row 8.',updated:iso(i+1)});}
 students.push({email:EMAIL,...student,firstSeen:iso(0),lastActive:Object.values(s.progress).map(p=>p.updated).sort().pop()||iso(0)});
 for(const [k,p] of Object.entries(s.progress)){const [q,part]=k.split('|');progress.push({email:EMAIL,q,p:part,...p,viewed:!!p.solutionViewed});}for(const [q,text] of Object.entries(s.working))working.push({email:EMAIL,q,text,updated:s.workingAt||iso(0)});history.push(...s.history);
 const counts={},wrongTop={};for(const h of history){if(h.result!=='Incorrect')continue;const k=h.q+'|'+h.part;counts[k]??={};counts[k][h.response]=(counts[k][h.response]||0)+1;}for(const [k,v] of Object.entries(counts))wrongTop[k]=Object.entries(v).sort((a,b)=>b[1]-a[1]).slice(0,3);
 return {title:CONFIG.TITLE,course:CONFIG.COURSE,classes:CONFIG.CLASSES,activeMinutes:10,sections:SECTIONS.map(s=>({id:s.id,title:s.title,short:s.short})),parts,students,progress,working,wrongTop,history,serverTime:iso(0)};}
const methods={getBootstrap:bootstrap,submitAnswer:submit,revealSolution:reveal,getTrackerData:tracker,registerStudent:()=>student,saveWorking:(q,text)=>{findQuestion_(q);const s=read();s.working[q]=String(text).slice(0,5000);s.workingAt=new Date().toISOString();write(s);return {saved:true,at:s.workingAt};},resetMyAnswers:()=>{write({progress:{},working:{},history:[]});return {reset:true};},getAttemptHistory:(email,q,p)=>tracker().history.filter(h=>h.email===email&&h.q===q&&(!p||h.part===p))};
window.BinomialDemo={key:KEY,call:(name,args)=>{if(!Object.hasOwn(methods,name))throw new Error('Unknown demo action');return methods[name](...args);}};

})();
