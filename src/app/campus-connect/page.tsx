"use client";

import React, { useState, useMemo } from "react";
import { MessageSquare, Send, CheckCircle2, UserCheck, HelpCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Chip from "@/components/ui/Chip";
import Tabs from "@/components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import EmptyState from "@/components/ui/EmptyState";
import FormError from "@/components/ui/FormError";
import { MOCK_MENTORS, MOCK_QUESTIONS, Mentor, Question } from "@/lib/mockData";

export default function CampusConnectPage() {
  const [connectTab, setConnectTab] = useState("find_mentor"); // 'find_mentor' | 'ask_question'

  // Mentor Discovery State
  const [filterType, setFilterType] = useState<"All" | "Senior" | "Alumni">("All");
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [chatSentSuccess, setChatSentSuccess] = useState(false);

  // Ask Question Form State
  const [helpTopic, setHelpTopic] = useState("Studies and exams");
  const [targetRespondent, setTargetRespondent] = useState("Seniors or alumni");
  const [questionText, setQuestionText] = useState("");
  const [formError, setFormError] = useState("");
  const [questions, setQuestions] = useState<Question[]>(MOCK_QUESTIONS);
  const [questionSuccess, setQuestionSuccess] = useState(false);

  const filteredMentors = useMemo(() => {
    if (filterType === "All") return MOCK_MENTORS;
    return MOCK_MENTORS.filter((m) => m.mentorType === filterType);
  }, [filterType]);

  const handleSendChatRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    setChatSentSuccess(true);
    setTimeout(() => {
      setChatSentSuccess(false);
      setSelectedMentor(null);
      setChatMessage("");
      alert(`Chat request sent to ${selectedMentor?.name}! They will be notified.`);
    }, 1000);
  };

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) {
      setFormError("Please type your question before submitting.");
      return;
    }
    setFormError("");

    const newQuestion: Question = {
      id: `q_${Date.now()}`,
      category: helpTopic,
      target: targetRespondent,
      questionText,
      createdAt: "Just now",
      answersCount: 0,
    };

    setQuestions([newQuestion, ...questions]);
    setQuestionSuccess(true);
    setQuestionText("");

    setTimeout(() => {
      setQuestionSuccess(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Title Header */}
      <div className="space-y-1 text-left">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">Campus Connect</h1>
        <p className="text-xs sm:text-sm text-slate-400">
          {connectTab === "find_mentor"
            ? "Chat with seniors and alumni who have been where you are."
            : "Ask anything. Replies come from seniors and alumni."}
        </p>
      </div>

      {/* Tab Switcher */}
      <Tabs
        activeTab={connectTab}
        onChange={setConnectTab}
        tabs={[
          { id: "find_mentor", label: "Find a mentor" },
          { id: "ask_question", label: "Ask a question" },
        ]}
      />

      {/* Tab 1: Find a mentor */}
      {connectTab === "find_mentor" && (
        <div className="space-y-5">
          {/* Mentor Type Filter Pills */}
          <div className="flex gap-2">
            {(["All", "Senior", "Alumni"] as const).map((type) => (
              <Chip
                key={type}
                variant="secondary"
                active={filterType === type}
                onClick={() => setFilterType(type)}
              >
                {type === "All" ? "All" : `${type}s`}
              </Chip>
            ))}
          </div>

          {/* Mentor Cards List */}
          <div className="space-y-4">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-navy-950 font-bold text-sm flex items-center justify-center shrink-0">
                    {mentor.avatarInitials}
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-serif text-base font-semibold text-white">{mentor.name}</h4>
                    <p className="text-xs text-slate-300">{mentor.role}</p>
                    <p className="text-[11px] text-slate-400">{mentor.college}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {mentor.tags.map((t) => (
                        <Chip key={t} variant="dark" size="sm">
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0 bg-slate-100 text-navy-950 font-bold border-white hover:bg-white hover:text-navy-950"
                  onClick={() => setSelectedMentor(mentor)}
                >
                  Request chat
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Ask a question */}
      {connectTab === "ask_question" && (
        <div className="space-y-6">
          <Card className="space-y-4">
            <FormError message={formError} />

            {questionSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Your question has been posted to the campus community!</span>
              </div>
            )}

            <form onSubmit={handleSendQuestion} className="space-y-4">
              <Select
                label="What do you need help with?"
                value={helpTopic}
                onChange={(e) => setHelpTopic(e.target.value)}
                options={[
                  { value: "Studies and exams", label: "Studies and exams" },
                  { value: "Placements & Internships", label: "Placements & Internships" },
                  { value: "Hostel & PG advice", label: "Hostel & PG advice" },
                  { value: "Lab projects", label: "Lab projects" },
                ]}
              />

              <Select
                label="Who should answer?"
                value={targetRespondent}
                onChange={(e) => setTargetRespondent(e.target.value)}
                options={[
                  { value: "Seniors or alumni", label: "Seniors or alumni" },
                  { value: "Seniors only", label: "Seniors only" },
                  { value: "Alumni only", label: "Alumni only" },
                ]}
              />

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-medium text-slate-300">Your question</label>
                <textarea
                  rows={4}
                  className="w-full bg-navy-900/90 text-slate-100 placeholder:text-slate-500 rounded-xl text-sm border border-navy-700 p-3 focus:outline-none focus:border-brand-secondary"
                  placeholder="Example: How should I plan my first semester?"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth leftIcon={<Send className="w-4 h-4" />}>
                Send question
              </Button>
            </form>
          </Card>

          {/* Section: Your questions */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-white">Your questions</h3>

            {questions.length === 0 ? (
              <EmptyState
                title="No questions yet"
                description="Ask one above and a senior or alumnus will reply."
              />
            ) : (
              <div className="space-y-3">
                {questions.map((q) => (
                  <Card key={q.id} className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <Chip variant="tag" size="sm">{q.category}</Chip>
                      <span>{q.createdAt}</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{q.questionText}</p>
                    <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                      <span>Target: {q.target}</span>
                      <span className="text-brand-secondary font-medium">
                        {q.answersCount} {q.answersCount === 1 ? "reply" : "replies"}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Request Modal */}
      {selectedMentor && (
        <Modal
          isOpen={Boolean(selectedMentor)}
          onClose={() => setSelectedMentor(null)}
          title={`Request mentorship chat with ${selectedMentor.name}`}
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setSelectedMentor(null)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={handleSendChatRequest}>
                Send Request
              </Button>
            </>
          }
        >
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-navy-950 border border-navy-800">
              <div className="w-10 h-10 rounded-full bg-brand-primary text-navy-950 font-bold text-sm flex items-center justify-center shrink-0">
                {selectedMentor.avatarInitials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{selectedMentor.name}</p>
                <p className="text-xs text-slate-400">{selectedMentor.role}</p>
              </div>
            </div>

            {chatSentSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chat request sent successfully!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Introduce yourself & describe what you need guidance on:
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-navy-950 text-slate-100 placeholder:text-slate-500 rounded-xl text-sm border border-navy-700 p-3 focus:outline-none focus:border-brand-secondary"
                  placeholder="Hi Anjali, I'm a 1st year CS student looking for advice on KTU lab exams and study plans..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
