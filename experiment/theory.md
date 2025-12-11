This experiment will help students understand the key ideas in linear algebra, namely linear independence, basis, dimension, and coordinates. These concepts are essential while working with vector spaces. Students will learn how to determine whether vectors are linearly independent, how a basis can be formed and how to express any vector in terms of a chosen basis to determine co-ordinates. Here <i>V</i> denotes a vector space over <i>R</i> or <i>C</i>.
### 1. Linearly independence:
#### 1.1. Linearly dependent set:
Let &straightphi; ≠<i>S</i>⊆<i>V</i>. If <i>x</i>&isin;<i>S</i> be such that <i>x</i> is a linear combination of some other elements of <i>S</i>, then <i>S</i> is said to be linearly dependent. In other words, if <i>S</i> is linearly dependent, then for some <i>x</i>&isin;<i>S</i>, there exists <i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>, …,<i>y</i><sub><i>n</i></sub>&isin;<i>S</i>, which are different from <i>x</i> such that <i>x</i>=<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+<i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+<i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>, for some <i>α</i><sub>1</sub>, <i>α</i><sub>2</sub>, ..., <i>α</i><sub><i>n</i></sub>&isin;<i>F</i>. Notice that in this case, (-1)<i>x</i>+<i>α</i><sub>1</sub><i>y</i><sub>1</sub>+<i>α</i><sub>2</sub><i>y</i><sub>2</sub>+ …+ <i>α</i><sub><i>n</i></sub><i>y</i><sub><i>n</i></sub>=0, i.e. there exists a linear combination of elements of <i>S</i> which equals zero, but not all coefficients are zero. Any set containing zero vector is linearly dependent.

![Linearly dependent set](images/exp4newimage1.PNG "Linearly dependent set")<br>
#### 1.2. Linearly independent set:
Let &straightphi;≠<i>S</i>⊆<i>V</i>. Then <i>S</i> is said to be a linearly independent set if it is not linearly dependent. The non-empty set &straightphi; is defined to be linearly independent.<br>
To show that <i>S</i>={<i>a</i>, <i>b</i>}⊆<i>V</i> is linearly independent, one needs to show that <i>b</i>≠<i>αa</i> and <i>a</i>≠<i>βb</i>, for any scalars <i>α</i> and <i>β</i>.
Similarly, to show that <i>S</i>={<i>a, b, c</i>}⊆<i>V</i> is linearly independent one needs to show that none of <i>a</i>, <i>b</i> and <i>c</i> is a linear combination of the other two elements.<br>

![Linearly independent set](images/exp4newimage2.PNG "Linearly independent set")<br>
General method to show linear independence is provided in the proposition given below.
#### 1.3. Proposition:
Let &straightphi;≠S⊆V. Then S is linearly independent if and only if [α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+ …+α<sub>n</sub>x<sub>n</sub>=0 &#8658; α<sub>i</sub>=0, for all i=1, 2, …, n; where α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>n</sub>&isin;F, x<sub>1</sub>, x<sub>2</sub>, …, x<sub>n</sub>&isin;S].
#### Proof: Sufficient part:
Let α<sub>i</sub>=0, for all i=1, 2, …, n;
whenever α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+ …+α<sub>n</sub>x<sub>n</sub>=0, where α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>n</sub>&isin;F, x<sub>1</sub>, x<sub>2</sub>, …, x<sub>n</sub>&isin;S. To the contrary, let S be linearly dependent. By definition of a linearly dependent set, there exists x&isin;S, such that x=α<sub>1</sub>y<sub>1</sub>+ α<sub>2</sub>y<sub>2</sub>+ …+ α<sub>n</sub>y<sub>n</sub>, for some α<sub>1</sub>, α<sub>2</sub>, ..., α<sub>n</sub>&isin;F, y<sub>1</sub>, y<sub>2</sub>, …, y<sub>n</sub>&isin;S. Thus (-1)x+α<sub>1</sub>y<sub>1</sub>+α<sub>2</sub>y<sub>2</sub>+ …+ α<sub>n</sub>y<sub>n</sub>=0. By hypothesis, -1=0. This is a contradiction.
#### Necessary part:
Let S be linearly independent. To the contrary, let α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+ …+ α<sub>n</sub>x<sub>n</sub>=0 and α<sub>i</sub>≠0, for some i=1, 2, …, n. Clearly -α<sub>i</sub>x<sub>i</sub>=α<sub>1</sub>x<sub>1</sub>+ α<sub>2</sub>x<sub>2</sub>+ …+
α<sub>i-1</sub>x<sub>i-1</sub>+α<sub>i+1</sub>x<sub>i+1</sub>+…+ α<sub>n</sub>x<sub>n</sub>. Hence x <sub>i</sub>=-α<sub>i</sub><sup>-1</sup>(α<sub>1</sub>x<sub>1</sub>+α<sub>2</sub>x<sub>2</sub>+ …+ α<sub>i-1</sub>x<sub>i-1</sub>+α<sub>i+1</sub>x<sub>i+1</sub>+…+ α<sub>n</sub>x<sub>n</sub>). Note that α<sub>i</sub><sup>-1</sup> exists because α<sub>i</sub>≠0. Hence S is linearly dependent, a contradiction.
#### 1.4. Examples-I:
Consider R<sup>2</sup> be the vector space over R, where S⊆R<sup>2</sup>.<br><br>
(i) S={(0, 1), (1, 2), (2, 7)} is linearly dependent. <br>
Justification: Clearly, (2, 7) is a linear combination of (0, 1), (1, 2) as given below:
(2, 7)=2(1, 2)+3(0, 1). Thus, S is linearly dependent. Notice that 2(1, 2)-3(0, 1)+1(2, 7)=0, i.e. a linear combination of elements of S is zero, but all the coefficients are not zero.<br>
<b>Remark.</b> a(0, 1)+b(1, 2)+c(2, 7)=0 ⇒ (b+2c,a+2b+7c)=0 implies that b+2c=0 and a+2b+7c=0 which does not imply that a=b=c=0. Hence it does not determine whether S is linearly dependent or independent. It only gives a clue.<br><br>
(ii) S={(1, 2),(1, 0)} is linearly independent. <br>
Justification: a(1, 2)+b(1, 0)=(0, 0) ⇒ (a, 2b)+(b, 0)=(0, 0) ⇒ (a+b, 2b)=(0, 0). Thus a=0, b=0. Hence, both the coefficients are zero therefore, S is linearly independent.

#### 1.5. Examples-II:
(i) Consider the vector space R<sup>3</sup> over R. Then S={(1, 0, 0), (0, 1, 0), (0, 0, 1)} is linearly independent.
Justification: Let α(1, 0, 0)+β(0, 1, 0)+γ(0, 0, 1)=0; for α, β, γ&isin;R. By solving this we get α=0, β=0, γ=0 which implies by definition, that S is linearly independent.<br>
(ii.) Consider the vector space P<sub>2</sub>(x) over R. Then S={1, x, x<sup>2</sup>+1} is linearly independent.
Justification: Let α(1)+β(x)+γ(x2+1)=0; for α, β, γ&isin;R. By solving this we get α=0, β=0, γ=0 which implies by definition, that S is linearly independent.

#### 1.6. Properties of linearly independent andb linearly dependent sets:
(i) Any set containing the zero vector is linearly dependent. In particular, {0} is linearly dependent. <br>
(ii) Singleton set containing a non-zero vector is linearly independent. <br>
(iii) Subset of a linearly independent is linearly independent.<br>
(iv) Superset of a linearly dependent set is linearly dependent.<br>

### 2. Basis:
A non-empty subset S of V is said to be a basis if S is a linearly independent set and spans V.

![Basis](images/exp4image3.PNG "Basis")<br>
#### 2.1. Examples:
1. Let S be the linearly independent set as given in Example 5 (i). It can be seen that S spans R<sup>3</sup>. Hence S is a basis for R<sup>3</sup>.
2. Let S be the linearly independent set as given in Example 5 (ii). It can be seen that S spans P<sub>2</sub>(x). Hence S is a basis for P<sub>2</sub>(x). <br>
### 3. Dimension:
Let V have a basis consisting of finitely many elements. Then the number of elements in the basis of V is called the dimension of the vector space V and is denoted by Dim. The dimension of {0} is defined to be zero as it is defined to be generated by &straightphi;. <br>

![Dimension](images/exp4image4.PNG "Dimension")<br>
#### 3.1. Examples:
1. In Example 5 (i) the Dim of S is 3.<br>
2. In Example 5 (ii) the Dim of S is 3. <br>
#### 3.2. Properties of basis and dimension:
1. Let V have a finite basis. Then every basis for V contains the same number of vectors.
2. If a basis of V has n elements, then any subset of V having n-1 elements does not span V.
3. If a basis has n elements, then any subset of V having n+1 elements is linearly dependent.
4. Let B be a subset of V. Then the following are equivalent.<br>
&emsp; a. B is basis.<br>
&emsp; b. B is a minimal generating set, that is no proper subset of B can generate V.<br>
&emsp; c. B is a maximal linearly independent set.<br>
### 4. Co-ordinates:
Let V be a vector space and x&isin;V and let B={ e<sub>1</sub>, e<sub>2</sub>} be a basis. Then x=αe<sub>1</sub>+βe<sub>2</sub>, for some α, β&isin;F. These scalars α and β are called the co-ordinates of x w.r.t. the basis {e<sub>1</sub>, e<sub>2</sub>}. <br>

![Co-ordinates](images/exp5image5.PNG "Co-ordinates")<br>
#### 4.1. Examples:
Let R<sup>2</sup> be the vector space over R.
1. Consider a basis B={(1, 1), (1, 0)} of the vector space R<sup></sup> over R. Then (2, 3)&isin;R<sup>2</sup> can be written as (2, 3)=α(1, 1)+β(1, 0). This implies that α=3 and β=-1 Thus co-ordinates of (2, 3) w.r.t. the basis B are 3, -1.
2. If B={e<sub>1</sub>, e<sub>2</sub>} is a basis of the vector space R<sup>2</sup> over R, then<br>
(i) The co-ordinates of e<sub>1</sub> w.r.t. the basis B are 1, 0 since e<sub>1</sub>=1.e<sub>1</sub>+0.e<sub>2</sub>.<br>
(ii) The co-ordinates of e<sub>2</sub> w.r.t. the basis B are 0, 1 since e<sub>2</sub>=0.e<sub>1</sub>+1.e<sub>2</sub>.
