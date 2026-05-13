package com.flowledger.flowledger_backend.repository;

import com.flowledger.flowledger_backend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}