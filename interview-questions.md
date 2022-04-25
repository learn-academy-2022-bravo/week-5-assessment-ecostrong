<!-- # ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash is a key in ruby. It can be used to tag a collection of data.

  Researched answer: 

  Hash is a data structure that keeps track of a series of objects known as keys, each of which has a value associated with it. 
  A hash is a collection of unique keys and their values in basic terms. Hashes are like dictionaries, unlike an array which is a list. 
  A Hash assigns value to a key, so that values can be looked up by their keys. 

  example from Ruby for Beginners: 
  
  In Ruby you can create a Hash by assigning a key to a value with =>,
   separate these key/value pairs with commas, and enclose the whole thing with curly braces.

So if going from English to German: 

{ "one" => "eins", "two" => "zwei", "three" => "drei" }

This defines a Hash that contains 3 key/value pairs, meaning that we can look up three values 
(the strings "eins", "zwei", and "drei") using three different keys (the strings "one", "two", and "three").

This is a Hash Rocket => 



2. What is a gem?

  Your answer: A gem in ruby is a package of code that is installed on your terminal, it is like reference library. 

  Researched answer: A Ruby Gem is a package manager for the Ruby Programming language. Gems provide standard formating 
  for the Ruby program and libraries in a format called "Gems" 

  Per Wikipedia: 

  A Gem consist of: 
  1. Code 
  2. Documentation 
  3. Gem specialization 

  The code organization follows the following structure for a gem called gem_name:

gem_name/
├── bin/
│   └── gem_name
├── lib/
│   └── gem_name.rb
├── test/
│   └── test_gem_name.rb
├── README
├── Rakefile
└── gem_name.gemspec



3. What is Ruby on Rails?

  Your answer: Ruby on Rails was created for the programming language Ruby. It creates web apps. 

  Researched answer: 

Rails is an open source web application framework which runs the Ruby programming language. Rails is written in Ruby. 
It allows for writing less code and the Rails philosphpy is to not repeat yourself and a set of conventions on the best way to do something. 
Rails has a prebuilt structure for development. 

Rails is like pre built "Legos" of code that you can mix, match, and modify to create a custom web application. You don't have to build 
everything from scratch. 

Ruby on Rails uses the Model-View Constroller (MVC) architectural pattern used by many other web frameworks. 
MVC pattern separates web apps code into three parts. 

The Model-holds the data structure
The View- the visual part of web page templates
THe Controller- conects the View and the logic of the app



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database contains tables with rows and columns. 

  Researched answer: A relational databse is a collection of information that is organized into data points. They have been around since the 
  1970's. Structured Query Language SQL is the most common for readding, creating, and updating, and deleting data. Relational databases are 
  very reliable. They are organzied as a set of tables with columns and rows. Each column hodls a certain type of data and field 
 that has an actual value of an attribute. The rows in the table represent a collection of related values 
 Each row in a table could be marked with a unquie idenifier, a primayr key. 

 Examples: Microsoft SQL Server, Oracle Database, MySQL, PostgreSQL and IBM Db2

Non-relational databases are those that do not use SQL as their primary data access language and are referred to as NoSQL databases.
Because data in a NoSQL database does not have to comply to a pre-defined schema, unlike data in relational databases, these databases are ideal for storing unstructured or semi-structured data.
One benefit of NoSQL databases is that they allow developers to make changes to the database on the fly without disrupting apps that use it.

 Examples: Apache Cassandra, MongoDB, CouchDB, and CouchBase

Any database that is built to function in the cloud is referred to as a cloud database.
Cloud databases, like other cloud-based applications, provide flexibility, scalability, and high availability.
Because many cloud databases are provided as a service, they are frequently low-maintenance.


Examples: Microsoft Azure SQL Database, Amazon Relational Database Service, Oracle Autonomous Database.


5. What are primary keys? Why are they important?

  Your answer: Primary Keys are the listed in the column and important because they contain the values. 
  For example Titles would First Name, Last Name, DOB would be primary keys in a database. 
  When I worked for a univerity, the student ID number was a primary key in our database. 
  
  Researched answer:
  In a database a primary key of a relational table uniquly identifies each record in the table. Databases use keys to compare, 
  sort and store records and to create relationships between records. Primary key are essential to database because these keys 
  are used to compare and otherwise define relationships between individual records. Never change the primary key after you assign it. 


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: A RESTful route is one that maps HTTP verbs (get, post, put, delete, patch) to CRUD activities in the controller 
(create, read, update, delete).Instead of depending just on the URL to determine which site to visit, a RESTful route 
uses both the HTTP verb and the URL to choose which site to visit. 

2. JSON:JSON (JavaScript Object Notation) is a data-exchange format that is simple to use. 
Reading and writing are simp>
trustedkey <%= @keys_trusted.join(' ') %>
<% end -%>
<% if @keys_requestkey != '' -%>
requestkey <%= @keys_requestkey %>
<% end -%>
<% if @keys_controlkey != '' -%>
controlkey <%= @keys_controlkey %>
<% end -%>

<% end -%>le tasks for humans. Machines can easily parse and generate it. 
It is based on a subset of the ECMA-262 3rd Edition - December 1999 JavaScript Programming Language Standard. 
JSON is a language-independent text format that incorporates standards common to programmers of the C family of languages, such as C, 
C++, C#, Java, JavaScript, Perl, Python, and many others. JSON is an ideal data-transfer language because of these characteristics.

JSON is made up of two basic structures:

Name/value pairs are grouped together in this collection. This is represented as an object, record, struct, dictionary, 
hash table, keyed list, or associative array in many languages.
A set of values in a specific order. This is the case in most languages.

3. ERB: ERB (Embedded RuBy) is a feature of Ruby that enables you to conveniently generate any kind of text, 
in any quantity, from templates. ERB is part of the Ruby standard library.

example from Puppet.com

ERB structure and syntax 

<%# Non-printing tag ↓ -%>
<% if @keys_enable -%>
<%# Expression-printing tag ↓ -%>
keys <%= @keys_file %>
<% unless @keys_trusted.empty? -%


4. Params: The parameters that come from the ActionController::Base and are provided to the controller via a GET or POST request. 
Through the ApplicationController, your application can access these parameters. 
In most cases, params are made up of data provided by your user, such as a URL or a form; yet, 
we frequently need access to and control over params when our user hasn't provided any new data.

Passing Params Through the URL
The most simple way in which we get params from a user is through the URL they use. 
<ActionController::Parameters {"controller"=>"users", "action"=>"show", "id"=>"22"} permitted: true>

5. API: Application Programming Interface (API) is a software middleman that allows two apps to communicate with one another. 
You utilize an API every time you use an app like Facebook, send an instant message, or check the weather on your phone. -->
