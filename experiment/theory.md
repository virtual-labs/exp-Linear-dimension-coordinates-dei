<span style="font-family: 'Times New Roman'; font-size: 22px;">This experiment will help students understand the key ideas in linear algebra, namely linear independence, basis, dimension, and coordinates. These concepts are essential while working with vector spaces. Students will learn how to determine whether vectors are linearly independent, how a basis can be formed and how to express any vector in terms of a chosen basis to determine co-ordinates.<br>
<b>Notation:</b> Vector space over the field <i>F</i>≡<i>R</i> or <i>C</i>  is denoted by <i>V</i>, where <i>R</i> is the set of real numbers and <i>C</i> is the set of complex numbers.<br></span>
### <span style="font-family: 'Times New Roman'; font-size: 22px;">1. Linearly independence:</span>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.1. Linearly dependent set:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>&straightphi;</i>≠<i>S</i>⊆<i>V</i>. If <i>x</i>&isin;<i>S</i> be such that <i>x</i> is a linear combination of some other elements of <i>S</i>, then <i>S</i> is said to be linearly dependent. In other words, if <i>S</i>(as given in Fig.1) is linearly dependent, then for some <i>x</i>&isin;<i>S</i>, there exists <i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>, …,<i>y</i><sub><i>n</i></sub>&isin;<i>S</i>, which are different from <i>x</i> such that <i>x</i>=<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+<i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+<i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>, for some <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>n</i></sub>&isin;<i>F</i>. Notice that in this case, (-1)<i>x</i>+<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+<i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+ <i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>=0, i.e. there exists a linear combination of elements of <i>S</i> which equals zero, but not all coefficients are zero. Any set containing zero vector is linearly dependent.</span>

![Linearly dependent set](images/exp4newimage1.PNG "Linearly dependent set")<br>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.2. Linearly independent set:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let &straightphi;≠<i>S</i>⊆<i>V</i>. Then <i>S</i> (as given in Fig.2) is said to be a linearly independent set if it is not linearly dependent. Notice that the empty set &straightphi; is defined to be linearly independent.<br>
Now to show that <i>S</i>={<i>a</i>, <i>b</i>}⊆<i>V</i> is linearly independent, one needs to show that <i>b</i>≠<i>αa</i> and <i>a</i>≠<i>βb</i>, for any scalars <i>α</i> and <i>β</i>.
Similarly, to show that <i>S</i>={<i>a, b, c</i>}⊆<i>V</i> is linearly independent one needs to show that none of <i>a</i>, <i>b</i> and <i>c</i> is a linear combination of the other two elements.</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">General method to show linear independence is provided in the proposition given below.</span><br>
![Linearly independent set](images/exp4newimage2.PNG "Linearly independent set")

#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.3. Proposition:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let &straightphi;≠<i>S</i>⊆<i>V</i>. Then <i>S</i> is linearly independent if and only if [<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+<i>α</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub>=0 &#8658; <i>α</i><sub><i>i</i></sub>=0, for all <i>i</i>=1, 2, …, <i>n</i>; where <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>n</i></sub>&isin;<i>F</i>, <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, …, <i>x</i><sub><i>n</i></sub>&isin;<i>S</i>].</span>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">Proof: Sufficient part:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>α</i><sub><i>i</i></sub>=0, for all <i>i</i>=1, 2, …,<i>n</i>;
whenever <i>α</i><sub>1</sub><i>x</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+<i>α</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub>=0, where <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>n</i></sub>&isin;<i>F</i>, <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, …, <i>x</i><sub><i>n</i></sub>&isin;<i>S</i>. To the contrary, let <i>S</i> be linearly dependent. By definition of a linearly dependent set, there exists <i>x</i>&isin;<i>S</i>, such that <i>x</i>=<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+ <i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>, for some <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>n</i></sub>&isin;<i>F</i>, <i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>, …, <i>y</i><sub><i>n</i></sub>&isin;<i>S</i>. Thus (-1)x+<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+<i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+ <i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>=0. By hypothesis, -1=0. This is a contradiction.<br><br>
<b>Necessary part:</b>
Let <i>S</i> be linearly independent. To the contrary, let <i>α</i><sub>1</sub><i>x</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+ <i>α</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub>=0 and <i>α</i><sub><i>i</i></sub>≠0, for some <i>i</i>=1, 2, …, <i>n</i>. Clearly -<i>α</i><sub><i>i</i></sub><i>x</i><sub><i>i</i></sub>=<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+ <i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+
<i>α</i><sub><i>i</i>-1</sub><i>x</i><sub><i>i</i>-1</sub>+<i>α</i><sub><i>i</i>+1</sub><i>x</i><sub><i>i</i>+1</sub>+…+ <i>α</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub>. Hence <i>x</i> <sub><i>i</i></sub>=-<i>α</i><sub><i>i</i></sub><sup>-1</sup>(<i>α</i><sub>1</sub><i>x</i><sub>1</sub>+<i>α</i><sub>2</sub><i>x</i><sub>2</sub>+ …+ <i>α</i><sub><i>i</i>-1</sub><i>x</i><sub><i>i</i>-1</sub>+<i>α</i><sub><i>i</i>+1</sub><i>x</i><sub><i>i</i>+1</sub>+…+ <i>α</i><sub><i>n</i></sub><i>x</i><sub><i>n</i></sub>). Note that <i>α</i><sub><i>i</i></sub><sup>-1</sup> exists because <i>α</i><sub><i>i</i></sub>≠0. Hence <i>S</i> is linearly dependent, a contradiction.<br><br>
<b>1.4. Examples-I:</b>
Consider <i>R</i><sup>2</sup> be the vector space over <i>R</i>, where <i>S</i>⊆<i>R</i><sup>2</sup>.<br><br>
(i) <i>S</i>={(0, 1), (1, 2), (2, 7)} is linearly dependent. <br>
Justification: Clearly, (2, 7) is a linear combination of (0, 1), (1, 2) as given below:
(2, 7)=2(1, 2)+3(0, 1). Thus, <i>S</i> is linearly dependent. Notice that 2(1, 2)-3(0, 1)+1(2, 7)=0, i.e. a linear combination of elements of <i>S</i> is zero, but all the coefficients are not zero.<br>
<b>Remark.</b> <i>a</i>(0, 1)+<i>b</i>(1, 2)+<i>c</i>(2, 7)=0 ⇒ (<i>b</i>+2<i>c</i>,<i>a</i>+2<i>b</i>+7<i>c</i>)=0 implies that <i>b</i>+2<i>c</i>=0 and <i>a</i>+2<i>b</i>+7<i>c</i>=0 which does not imply that <i>a</i>=<i>b</i>=<i>c</i>=0. Hence it does not determine whether <i>S</i> is linearly dependent or independent. It only gives a clue.<br><br>
(ii) <i>S</i>={(1, 2),(1, 0)} is linearly independent. <br>
Justification: <i>a</i>(1, 2)+<i>b</i>(1, 0)=(0, 0) ⇒ (<i>a</i>, 2<i>b</i>)+(<i>b</i>, 0)=(0, 0) ⇒ (<i>a</i>+<i>b</i>, 2<i>b</i>)=(0, 0). Thus <i>a</i>=0, <i>b</i>=0. Hence, both the coefficients are zero therefore, <i>S</i> is linearly independent.</span>

#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.5. Examples-II:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">(i) Consider the vector space <i>R</i><sup>3</sup> over <i>R</i>. Then <i>S</i>={(1, 0, 0), (0, 1, 0), (0, 0, 1)} is linearly independent.
Justification: Let <i>α</i>(1, 0, 0)+<i>β</i>(0, 1, 0)+<i>γ</i>(0, 0, 1)=0; for <i>α, β, γ</i>&isin;<i>R</i>. By solving this we get <i>α</i>=0, <i>β</i>=0, <i>γ</i>=0 which implies by definition, that <i>S</i> is linearly independent.<br>
(ii.) Consider the vector space <i>P</i><sub>2</sub>(<i>x</i>) over <i>R</i>. Then <i>S</i>={1, <i>x</i>, <i>x</i><sup>2</sup>+1} is linearly independent.
Justification: Let <i>α</i>(1)+<i>β</i>(<i>x</i>)+<i>γ</i>(<i>x</i><sup>2</sup>+1)=0; for <i>α, β, γ</i>&isin;<i>R</i>. By solving this we get <i>α</i>=0, <i>β</i>=0, <i>γ</i>=0 which implies by definition, that <i>S</i> is linearly independent.</span>

#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.6. Properties of linearly independent andb linearly dependent sets:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">(i) Any set containing the zero vector is linearly dependent. In particular, {0} is linearly dependent. <br>
(ii) Singleton set containing a non-zero vector is linearly independent. <br>
(iii) Subset of a linearly independent is linearly independent.<br>
(iv) Superset of a linearly dependent set is linearly dependent.<br></span>

### <span style="font-family: 'Times New Roman'; font-size: 22px;">2. Basis:</span>
A non-empty subset <i>B</i> (as given in Fig.3) of <i>V</i> is said to be a basis if <i>B</i> is a linearly independent set and spans <i>V</i>.</span>

![Basis](images/exp4image3.PNG "Basis")<br>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">2.1. Examples:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Let <i>S</i> be the linearly independent set as given in Example 5 (i). It can be seen that <i>S</i> spans <i>R</i><sup>3</sup>. Hence <i>S</i> is a basis for <i>R</i><sup>3</sup>.<br>
2. Let <i>S</i> be the linearly independent set as given in Example 5 (ii). It can be seen that <i>S</i> spans <i>P</i><sub>2</sub>(<i>x</i>). Hence <i>S</i> is a basis for <i>P</i><sub>2</sub>(<i>x</i>). <br>
### <span style="font-family: 'Times New Roman'; font-size: 22px;">3. Dimension:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>V</i> have a basis consisting of finitely many elements. Then the number of elements in the basis of <i>V</i> is called the dimension of the vector space <i>V</i> and is denoted by Dim. The dimension of {0} is defined to be zero as it is defined to be generated by &straightphi;.</span> <br>

![Dimension](images/exp4image4.PNG "Dimension")<br>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">3.1. Examples:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">1. In Example 5 (i) the Dim of <i>S</i> is 3.<br>
2. In Example 5 (ii) the Dim of <i>S</i> is 3. </span><br>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">3.2. Properties of basis and dimension:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Let <i>V</i> have a finite basis. Then every basis for <i>V</i> contains the same number of vectors.<br>
2. If a basis of <i>V</i> has <i>n</i> elements, then any subset of <i>V</i> having <i>n</i>-1 elements does not span <i>V</i>.<br>
3. If a basis has <i>n</i> elements, then any subset of <i>V</i> having <i>n</i>+1 elements is linearly dependent.<br>
4. Let <i>B</i> be a subset of <i>V</i>. Then the following are equivalent.<br>
&emsp; a. <i>B</i> is basis.<br>
&emsp; b. <i>B</i> is a minimal generating set, that is no proper subset of <i>B</i> can generate <i>V</i>.<br>
&emsp; c. <i>B</i> is a maximal linearly independent set.<br>
<b>4. Co-ordinates:</b>
Let <i>V</i> be a vector space and <i>x</i>&isin;<i>V</i> and let <i>B</i>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} be a basis. Then <i>x</i>=<i>αe</i><sub>1</sub>+<i>βe</i><sub>2</sub>, for some <i>α, β</i>&isin;<i>F</i>. These scalars <i>α</i> and <i>β</i> are called the co-ordinates of <i>x</i> w.r.t. the basis {<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>}.</span> <br>

![Co-ordinates](images/exp5image5.PNG "Co-ordinates")<br>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">4.1. Examples:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>R</i><sup>2</sup> be the vector space over <i>R</i>.</span>

<span style="font-family: 'Times New Roman'; font-size: 22px;">1. Consider a basis <i>B</i>={(1, 1), (1, 0)} of the vector space <i>R</i><sup></sup> over <i>R</i>. Then (2, 3)&isin;<i>R</i><sup>2</sup> can be written as (2, 3)=<i>α</i>(1, 1)+<i>β</i>(1, 0). This implies that <i>α</i>=3 and <i>β</i>=-1 Thus co-ordinates of (2, 3) w.r.t. the basis <i>B</i> are 3, -1.
<br>2. If <i>B</i>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} is a basis of the vector space <i>R</i><sup>2</sup> over <i>R</i>, then<br>
(i) The co-ordinates of <i>e</i><sub>1</sub> w.r.t. the basis <i>B</i> are 1, 0 since <i>e</i><sub>1</sub>=1.<i>e</i><sub>1</sub>+0.<i>e</i><sub>2</sub>.<br>
(ii) The co-ordinates of <i>e</i><sub>2</sub> w.r.t. the basis <i>B</i> are 0, 1 since <i>e</i><sub>2</sub>=0.<i>e</i><sub>1</sub>+1.<i>e</i><sub>2</sub>.</span>
